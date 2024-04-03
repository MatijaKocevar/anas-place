"use client";

import { User } from "@clerk/nextjs/api";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
];
