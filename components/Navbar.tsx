import { SignedIn, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <nav className="fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            <div className="flex justify-between ">
                <MobileNav />

                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in" />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
