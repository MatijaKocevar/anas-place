import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
    afterAuth(auth, req, evt) {
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        if (auth.userId) {
            const userOrganizations = auth.sessionClaims.userOrganizations as { [orgId: string]: string };
            const isAdminOfAnyOrg = Object.values(userOrganizations).some((role) => role === "org:all");
            const protectedPaths = ["/users", "/receipts"];
            const isAccessingProtectedRoute = protectedPaths.includes(req.nextUrl.pathname);

            if (isAccessingProtectedRoute && !isAdminOfAnyOrg) {
                const url = req.nextUrl.clone();
                url.pathname = "/";
                return NextResponse.rewrite(url);
            }
        }

        return NextResponse.next();
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
