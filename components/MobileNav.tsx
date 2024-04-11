"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navigationLinks } from "../constants/navigation-links";
import useUserRole from "../hooks/useUserRole";
import { useUser } from "@clerk/nextjs";

const MobileNav = () => {
    const pathname = usePathname();
    const { isAdmin } = useUserRole();
    const { user } = useUser();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={36}
                        height={36}
                        alt="hamburger icon"
                        className="cursor-pointer lg:hidden"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-primary-1">
                    <Link href="/" className="flex items-center gap-1">
                        <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
                        <p className="text-[26px] font-extrabold text-black">Ana&apos;s place</p>
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 pt-6 text-black">
                                {navigationLinks.map((link) => {
                                    const isActive =
                                        pathname === link.route ||
                                        pathname.startsWith(`${link.route}/`);
                                    const isLinkVisible = link.admin ? isAdmin : true;

                                    return (
                                        <SheetClose asChild key={link.route}>
                                            {isLinkVisible ? (
                                                <Link
                                                    href={link.route}
                                                    key={link.label}
                                                    className={cn(
                                                        "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                                                        {
                                                            "bg-accent-gold-1": isActive,
                                                        }
                                                    )}
                                                >
                                                    <Image
                                                        src={link.imgURL}
                                                        alt={link.label}
                                                        width={20}
                                                        height={20}
                                                    />
                                                    <p className="font-semibold">{link.label}</p>
                                                </Link>
                                            ) : null}
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
