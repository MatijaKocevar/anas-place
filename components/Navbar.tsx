import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed bg-primary-1 z-50 w-full px-6 py-4 lg:px-10">
            <div className="flex justify-between ">
                <Link href="/" className="flex items-center gap-1">
                    <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
                    <p className="text-[26px] font-extrabold text-black">Ana&apos;s place</p>
                </Link>

                <div className="flex justify-between items-center gap-5">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/sign-in" />
                    </SignedIn>
                    <SignedOut>
                        <div className="flex w-full whitespace-nowrap">
                            <SignInButton />
                        </div>
                    </SignedOut>

                    <MobileNav />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
