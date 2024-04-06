import { ActiveSessionResource } from "@clerk/types";

function checkUserRole(session: ActiveSessionResource | null | undefined) {
    if (
      !session ||
      !session.user ||
      !session.user.organizationMemberships ||
      session.user.organizationMemberships.length === 0
    ) {
      return null; 
    }
  
    const organizationMemberships = session.user.organizationMemberships;
  
    for (const membership of organizationMemberships) {
      if (membership.role) {
        return membership.role.toLowerCase();
      }
    }
  
    return null;
  }
  
  export { checkUserRole };