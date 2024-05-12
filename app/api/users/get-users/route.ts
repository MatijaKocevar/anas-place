import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";

export async function GET() {
    const users = await clerkApi.users.getUserList({ limit: 100 });

    return Response.json(users);
}
