import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
    return (
        <main className="flex h-screen w-full items-center justify-center">
            <SignIn
                appearance={{
                    elements: {
                        headerTitle: {
                            textAlign: "center",
                        },
                        headerSubtitle: {
                            textAlign: "center",
                        },
                        logoBox: {
                            display: "flex",
                            justifyContent: "center",
                        },
                    },
                }}
            />
        </main>
    );
};

export default SignInPage;
