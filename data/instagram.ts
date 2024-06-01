import prisma from "../lib/prisma";
import axios from "axios";

export async function getCurrentInstagramToken() {
    const tokenRecord = await prisma.instagramToken.findUnique({
        where: { id: 1 },
    });
    return tokenRecord ? tokenRecord.token : null;
}

export async function updateInstagramToken(newToken: string, newExpiry: Date) {
    await prisma.instagramToken.update({
        where: { id: 1 },
        data: {
            token: newToken,
            expiry: newExpiry,
        },
    });
}

export async function refreshInstagramToken() {
    const currentToken = await getCurrentInstagramToken();
    const response = await axios.get(`https://graph.instagram.com/refresh_access_token`, {
        params: {
            grant_type: "ig_refresh_token",
            access_token: currentToken,
        },
    });

    const newToken = response.data.access_token;
    const newExpiry = new Date(Date.now() + response.data.expires_in * 1000);

    await updateInstagramToken(newToken, newExpiry);

    return newToken;
}