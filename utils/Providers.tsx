"use client";
import React, { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClerkProvider } from "@clerk/nextjs";
import { getQueryClient } from "./get-query-client";

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
