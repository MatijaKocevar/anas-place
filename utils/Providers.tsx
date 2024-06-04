"use client";
import React, { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClerkProvider } from "@clerk/nextjs";
import { getQueryClient } from "./get-query-client";
import { slSI } from "../constants/localizations";

const logoUrl = "icons/logo.png";

function Providers({ children }: { children: ReactNode }) {
    const client = getQueryClient();

    return (
        <>
            <ClerkProvider
                appearance={{
                    layout: {
                        logoImageUrl: logoUrl,
                    },
                }}
                localization={slSI}
            >
                <QueryClientProvider client={client}>
                    {children}
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </ClerkProvider>
        </>
    );
}

export { Providers };
