import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
    return (
        <main className="flex h-screen w-full items-center justify-center">
            <SignUp
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

export default SignUpPage;
