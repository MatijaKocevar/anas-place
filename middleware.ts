import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { roles } from "./constants/roles";

const activeOrgId = process.env.CLERK_ACTIVE_ORGANIZATION_ID;

export default authMiddleware({
    publicRoutes: ["/", "/sign-in", "/sign-up", "/gallery", "/api/gallery", "/services"],
    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        if (auth.userId && activeOrgId) {
            const protectedPaths = ["/users", "/api/users", "/receipts", "/bookings"];
            const isAccessingProtectedRoute = protectedPaths.some((protectedPath) =>
                req.nextUrl.pathname.startsWith(protectedPath)
            );
            const userOrganizations = auth.sessionClaims.userOrganizations as {
                [orgId: string]: string;
            };
            const isAdminInOrg = userOrganizations[activeOrgId] === roles.ADMIN;

            if (isAccessingProtectedRoute && !isAdminInOrg) {
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
