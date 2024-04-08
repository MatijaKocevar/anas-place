import { clerkClient } from "@clerk/nextjs/server";

export async function GET(request: Request) {
    const users = await clerkClient.users?.getUserList({ limit: 100 });

    request.headers.set("Cache-Control", "public, max-age=60, s-maxage=60");

    return Response.json(users);
}
