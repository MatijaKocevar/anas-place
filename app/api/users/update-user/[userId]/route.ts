import { clerkApi } from "@clerk/nextjs/edge-middlewarefiles";
import { UserResource } from "@clerk/types";

export async function PATCH(req: Request, { params }: { params: { userId: string } }) {
    const body = (await req.json()) as Partial<UserResource>;

    if (!body) return new Response(null, { status: 400 });

    const { firstName, lastName, username } = body;

    const updatedUser = await clerkApi.users?.updateUser(params.userId ?? "", {
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        username: username ?? "",
    });

    if (!updatedUser) {
        return new Response(null, { status: 404 });
    }

    return Response.json(updatedUser);
}
