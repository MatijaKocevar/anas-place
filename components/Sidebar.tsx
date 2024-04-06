"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useSession } from "@clerk/nextjs";
import { checkUserRole } from "../utils/userUtils";
import { roles } from "../constants/roles";

const Sidebar = () => {
    const pathname = usePathname();
    const { session } = useSession();
    const userRole = checkUserRole(session);

    return (
        <section className="sticky left-0 top-0 flex bg-primary-1 w-fit flex-col justify-between p-6 pt-28 max-lg:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                    const isLinkVisible = link.admin ? userRole === roles.ALL : true;

                    return isLinkVisible ? (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
                                "bg-accent-gold-1": isActive,
                            })}
                        >
                            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                            <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
                        </Link>
                    ) : null;
                })}
            </div>
        </section>
    );
};

export default Sidebar;
