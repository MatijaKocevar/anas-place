import { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";
import Navbar from "../../components/Navbar";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main className="relative">
            <Navbar />

            <div className="flex">
                <Sidebar />

                <section className="flex flex-1 flex-col px-6 mb-8 mt-28 max-md:pb-0 sm:px-14">
                    <div id="main-children-container" className="w-full h-full">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default RootLayout;
