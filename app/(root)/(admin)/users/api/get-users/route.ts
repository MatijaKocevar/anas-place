import { clerkClient } from "@clerk/nextjs/server";
export const revalidate = false;

export async function GET(req: Request) {
    const users = await clerkClient.users?.getUserList({ limit: 100 });

    return Response.json(users);
}
