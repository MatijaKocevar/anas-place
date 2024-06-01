"use client";
import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClerkProvider } from "@clerk/nextjs";

function Providers({ children }: { children: ReactNode }) {
    const client = new QueryClient();

    return (
        <>
            <ClerkProvider
                appearance={{
                    variables: {},
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
