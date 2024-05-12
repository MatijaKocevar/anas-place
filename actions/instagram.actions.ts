"use server";

import axios from "axios";
import { getCurrentInstagramToken } from "../data/instagram-service";
import { InstagramPost } from "../app/api/gallery/get-instagram-posts/route";

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

    const response = await axios.get(url);

    return response.data as InstagramResponseData;
};

export const getMoreInstagramPosts = async (nextPageUrl: string) => {
    const response = await axios.get(nextPageUrl);

    return response.data as InstagramResponseData;
};
