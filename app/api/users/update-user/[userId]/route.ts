import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";
import { UserResource } from "@clerk/types";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { userId: string } }) {
    const body = (await req.json()) as Partial<UserResource>;

    if (!body) return new NextResponse(null, { status: 400 });

    const { firstName, lastName, username } = body;

    const updatedUser = await clerkApi.users?.updateUser(params.userId ?? "", {
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        username: username ?? "",
    });

    if (!updatedUser) {
        return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(JSON.stringify(updatedUser));
}
