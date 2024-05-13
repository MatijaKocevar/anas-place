"use server";

import axios from "axios";
import { getCurrentInstagramToken } from "../data/instagram-service";
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

export const getInitialInstagramPosts = async () => {
    const instagramToken = await getCurrentInstagramToken();

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${instagramToken}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
    }

    const data = (await response.json()) as InstagramResponseData;

    return data;
};

export const getMoreInstagramPosts = async (nextPageUrl: string) => {
    const response = await fetch(nextPageUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
    }

    const data = (await response.json()) as InstagramResponseData;

    return data;
};
