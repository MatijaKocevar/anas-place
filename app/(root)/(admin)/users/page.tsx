import React from "react";
import { clerkClient, Protect } from "@clerk/nextjs";
import UsersTable from "../../../../components/UsersTable";
import { auth } from "@clerk/nextjs/server";

const UsersPage = async () => {
    const users = await clerkClient.users?.getUserList();

    return <UsersTable users={JSON.parse(JSON.stringify(users))} />;
};

export default UsersPage;
