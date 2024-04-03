"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className="sticky left-0 top-0 flex bg-primary-1 w-fit flex-col justify-between p-6 pt-28 max-lg:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
                                "bg-accent-gold-1": isActive,
                            })}
                        >
                            <Image src={item.imgURL} alt={item.label} width={24} height={24} />
                            <p className="text-lg font-semibold max-lg:hidden">{item.label}</p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;
