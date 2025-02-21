import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    const user = (await clerkClient()).users.getUser(params.userId);

    if (!user) return new NextResponse(null, { status: 404 });

    return new NextResponse(JSON.stringify(user));
}
