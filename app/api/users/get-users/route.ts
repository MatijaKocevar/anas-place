import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await clerkApi.users.getUserList({ limit: 100 });

    return new NextResponse(JSON.stringify(users));
}
