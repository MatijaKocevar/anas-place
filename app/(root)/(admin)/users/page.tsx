import React from "react";
import { UserDataTable } from "../../../../components/users/UserDataTable";
import { userTableColumns } from "../../../../constants/user-table-columns";

const UsersPage = async () => {
    return <UserDataTable columns={userTableColumns} />;
};

export default UsersPage;
