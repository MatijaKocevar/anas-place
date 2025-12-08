import { useUser } from "@clerk/nextjs";
import { roles } from "../constants/roles";

const activeOrgSlug = process.env.NEXT_PUBLIC_CLERK_ACTIVE_SLUG;

const useUserRole = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isLoaded || !isSignedIn || !user) return { role: null, isAdmin: false };

    const activeOrg = user.organizationMemberships.find(
        (membership) => membership.organization.slug === activeOrgSlug
    );

    if (activeOrg?.role) {
        const role = activeOrg.role.toLowerCase();
        const isAdmin = role === roles.ADMIN;

        return { role, isAdmin };
    }

    return { role: null, isAdmin: false };
};

export default useUserRole;
