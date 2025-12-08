import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/users", "/api", "/receipts", "/bookings"]);
const activeOrgId = process.env.CLERK_ACTIVE_ORGANIZATION_ID;

export default clerkMiddleware(async (auth, req) => {
    const { userId, sessionClaims, redirectToSignIn } = await auth();

    if (isProtectedRoute(req)) {
        if (!userId) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        const userOrganizations = sessionClaims?.userOrganizations as {
            [orgId: string]: string;
        };

        console.log(userOrganizations);
        console.log(activeOrgId);

        const isAdmin = activeOrgId && userOrganizations?.[activeOrgId] === "org:admin";

        console.log(isAdmin);

        if (!isAdmin) {
            const url = new URL("/", req.url);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
