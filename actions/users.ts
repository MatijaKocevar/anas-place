"use server";

import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";

export interface ClerkUser {
    id: string;
    username: string | null;
    emailAddresses: ClerkEmail[];
    hasImage: boolean;
    imageUrl: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumbers: ClerkPhoneNumber[];
    createdAt: number;
    updatedAt: number;
}

export interface ClerkEmail {
    id: string;
    emailAddress: string;
}

export interface ClerkPhoneNumber {
    id: string;
    phoneNumber: string;
}

export interface ClerkUserListResponse {
    users: ClerkUser[];
}

export const getUsers = async () => {
    const apiUsers = await clerkApi.users.getUserList({ limit: 100 });

    // Map the users to only include the properties needed
    const users: ClerkUser[] = apiUsers.map((user: any) => ({
        id: user.id,
        username: user.username,
        emailAddresses: user.emailAddresses.map((email: any) => ({
            id: email.id,
            emailAddress: email.emailAddress,
        })),
        hasImage: user.hasImage,
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumbers: user.phoneNumbers.map((phone: any) => ({
            id: phone.id,
            phoneNumber: phone.phoneNumber,
        })),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }));

    return users;
};
