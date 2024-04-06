"use client";

import { columns } from "../app/(root)/(admin)/users/columns";
import { DataTable } from "../app/(root)/(admin)/users/data-table";
import { User } from "@clerk/nextjs/server";

interface UsersTableProps {
    users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => <DataTable columns={columns} data={users} />;

export default UsersTable;
