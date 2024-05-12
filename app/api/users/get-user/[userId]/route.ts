import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    const user = await clerkApi.users?.getUser(params.userId);

    if (!user) return new NextResponse(null, { status: 404 });

    return new NextResponse(JSON.stringify(user));
}
