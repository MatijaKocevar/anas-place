import React from "react";
import { clerkClient } from "@clerk/nextjs";
import UsersTable from "../../../../components/UsersTable";

const UsersPage = async () => {
    const users = await clerkClient.users?.getUserList();

    return <UsersTable users={JSON.parse(JSON.stringify(users))} />;
};

export default UsersPage;
