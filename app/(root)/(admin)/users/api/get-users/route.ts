import { clerkClient } from "@clerk/nextjs/server";

export async function GET(request: Request) {
    const users = await clerkClient.users?.getUserList({ limit: 100 });

    request.headers.set("Cache-Control", "public, max-age=0, s-maxage=0");

    return Response.json(users);
}
