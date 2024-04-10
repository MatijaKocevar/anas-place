"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "../constants/navigation-links";
import useUserRole from "../hooks/useUserRole";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();
    const { isAdmin } = useUserRole();

    useEffect(() => {
        const updateIsOpen = () => {
            if (window.innerWidth < 1024 && !isOpen) setIsOpen(true);
        };

        updateIsOpen();

        window.addEventListener("resize", updateIsOpen);

        return () => window.removeEventListener("resize", updateIsOpen);
    }, [isOpen]);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const buttonStyle = isOpen
        ? `fixed top-1/2 left-[190px] z-50`
        : `fixed top-1/2 left-[93px] z-50`;

    return (
        <>
            <button onClick={toggleSidebar} className={buttonStyle + " max-lg:hidden"}>
                {isOpen ? "<" : ">"}
            </button>
            <section
                className={`sticky h-screen left-0 top-0 flex bg-primary-1 flex-col justify-between p-6 pt-28 max-lg:hidden lg:min-w-fit`}
            >
                <div className="flex flex-1 flex-col gap-6">
                    {navigationLinks.map((link) => {
                        const isActive =
                            pathname === link.route || pathname.startsWith(`${link.route}/`);
                        const isLinkVisible = link.admin ? isAdmin : true;

                        return isLinkVisible ? (
                            <Link
                                href={link.route}
                                key={link.label}
                                className={cn(
                                    "flex gap-4 items-center p-4 rounded-lg justify-start",
                                    {
                                        "bg-accent-gold-1": isActive,
                                    }
                                )}
                            >
                                <Image src={link.imgURL} alt={link.label} width={30} height={30} />
                                {isOpen && (
                                    <p className={`text-lg font-semibold ${!isOpen && "hidden"}`}>
                                        {link.label}
                                    </p>
                                )}
                            </Link>
                        ) : null;
                    })}
                </div>
            </section>
        </>
    );
};

export default Sidebar;
