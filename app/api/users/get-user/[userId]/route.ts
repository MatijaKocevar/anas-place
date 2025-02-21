/* eslint-disable */
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    const resolvedParams = await params;
    try {
        const user = (await clerkClient()).users.getUser(resolvedParams.userId);

        if (!user) return new NextResponse(null, { status: 404 });

        return new NextResponse(JSON.stringify(user));
    } catch (error) {
        return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
    }
}
