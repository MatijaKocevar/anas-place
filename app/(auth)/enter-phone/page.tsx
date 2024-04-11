"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const EnterPhonePage = () => {
    const { isLoaded, user, isSignedIn } = useUser();

    if (!isLoaded && !isSignedIn && !user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>User: {user?.id}</p>
            <p>Enter Phone</p>
        </div>
    );
};

export default EnterPhonePage;
