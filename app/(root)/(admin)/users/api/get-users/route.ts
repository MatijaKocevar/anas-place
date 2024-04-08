import { clerkClient } from "@clerk/nextjs/server";

export async function GET() {
    const users = await clerkClient.users?.getUserList({ limit: 100 });

    return new Response(JSON.stringify(users));
}
