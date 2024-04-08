import { clerkClient } from "@clerk/nextjs/server";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    const user = await clerkClient.users?.getUser(params.userId);

    if (!user) {
        return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify(user));
}
