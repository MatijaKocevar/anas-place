import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Providers } from "../utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://anas-place.net"),
    title: "Ana's place",
    description: "Ana's place is a place where you can book services and manage your bookings.",
    openGraph: {
        images: "public/icons/logo.png",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
