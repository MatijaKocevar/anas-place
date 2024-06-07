"use server";

import { getCurrentInstagramToken } from "../data/instagram";
import { InstagramPost } from "../app/_components/Gallery";

export interface InstagramResponseData {
    data: InstagramPost[];
    paging: {
        cursors: {
            before: string;
            after: string;
        };
        next: string;
    };
}

export const fetchInstagramPosts = async (url?: string) => {
    let nextUrl = url;

    if (!nextUrl) {
        const instagramToken = await getCurrentInstagramToken();
        nextUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${instagramToken}`;
    }

    const response = await fetch(nextUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
    }

    const data = (await response.json()) as InstagramResponseData;

    return data;
};
