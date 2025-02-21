/* eslint-disable */
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    const resolvedParams = await params;
    try {
        const data = await request.json();
        const user = await (await clerkClient()).users.updateUser(resolvedParams.userId, data);

        if (!user) return new NextResponse(null, { status: 404 });

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: "Error updating user" }, { status: 500 });
    }
}
