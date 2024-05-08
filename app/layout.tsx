import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ana's place",
    description: "Ana's place is a place where you can book services and manage your bookings.",
    openGraph: {
        images: [
            {
                url: "/public/icons/logo.png",
                width: 1200,
                height: 630,
                alt: "An image that best represents Ana's place",
            },
        ],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <ClerkProvider
                appearance={{
                    variables: {},
                }}
            >
                <body className={`${inter.className}`}>{children}</body>
            </ClerkProvider>
        </html>
    );
}
