"use server";

import { getCurrentInstagramToken, refreshInstagramToken } from "../data/instagram";
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

        if (instagramToken) {
            const expiryDate = new Date(instagramToken.expiry);
            const now = new Date();
            const oneWeekBeforeExpiry = new Date(expiryDate.getTime() - 7 * 24 * 60 * 60 * 1000);

            if (now >= oneWeekBeforeExpiry) {
                const newToken = await refreshInstagramToken();
                instagramToken.token = newToken.token;
                instagramToken.expiry = newToken.expiry;
            }
        }

        nextUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${instagramToken?.token}`;
    }

    const response = await fetch(nextUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
    }

    const data = (await response.json()) as InstagramResponseData;

    return data;
};
