import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    const user = await clerkApi.users?.getUser(params.userId);

    if (!user) return new Response(null, { status: 404 });

    return new Response(JSON.stringify(user));
}
