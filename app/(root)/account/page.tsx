import React from "react";
import Profile from "../../_components/Profile";
import { auth } from "@clerk/nextjs";

const ProfilePage = () => {
    const { userId } = auth();

    return <Profile params={{ userId: userId ?? "" }} />;
};

export default ProfilePage;
