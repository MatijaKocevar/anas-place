"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const EnterPhonePage = () => {
    const { isLoaded, user, isSignedIn } = useUser();

    if (!isLoaded && !isSignedIn && !user) {
        return <div>Nalaganje...</div>;
    }

    return (
        <div>
            <p>Uporabnik: {user?.id}</p>
            <p>Vnesi številko</p>
        </div>
    );
};

export default EnterPhonePage;
