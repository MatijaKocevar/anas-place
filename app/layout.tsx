import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ana's place",
    description: "Ana's place is a place where you can book services and manage your bookings.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <ClerkProvider
                appearance={{
                    variables: {
                        colorText: "#fff",
                        colorPrimary: "#0E78F9",
                        colorBackground: "#1C1F2E",
                        colorInputBackground: "#252A41",
                        colorInputText: "#fff",
                    },
                }}
            >
                <body className={`${inter.className} bg-dark-2`}>{children}</body>
            </ClerkProvider>
        </html>
    );
}
