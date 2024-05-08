import axios from "axios";

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

export type InstagramPost = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
};

export async function GET(request: Request) {
    const nextPageUrl = new URL(request.url).searchParams.get("nextPageUrl");

    const url =
        nextPageUrl ??
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return new Response(null, { status: 500 });
    }
}
