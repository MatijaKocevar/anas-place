"use client";

import { User } from "@clerk/nextjs/api";
import { ColumnDef } from "@tanstack/react-table";

// export type User = {
//     id: string;
//     username: string;
//     firstName: string;
//     lastName: string;
//     email: string;
// };

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
];
