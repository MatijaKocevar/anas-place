import axios from "axios";
import { getCurrentInstagramToken } from "../../../../data/instagram-service";
import { NextResponse } from "next/server";

export type InstagramPost = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
};

export async function GET(request: Request) {
    const instagramToken = await getCurrentInstagramToken();

    const nextPageUrl = new URL(request.url).searchParams.get("nextPageUrl");

    const url =
        nextPageUrl ??
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${instagramToken}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return new NextResponse(null, { status: 500 });
    }
}
