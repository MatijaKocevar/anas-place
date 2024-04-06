import React from "react";
import { clerkClient } from "@clerk/nextjs";
import { UserDataTable } from "../../../../components/UserDataTable";
import { columns } from "../../../../constants/user-table-columns";

const UsersPage = async () => {
    const users = await clerkClient.users?.getUserList({ limit: 100 });

    return <UserDataTable columns={columns} data={JSON.parse(JSON.stringify(users))} />;
};

export default UsersPage;
