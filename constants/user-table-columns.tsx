"use client";

import { User } from "@clerk/nextjs/api";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const userTableColumns: ColumnDef<User>[] = [
    {
        accessorKey: "imageUrl",
        header: "Image",
        cell: ({ row }) => {
            const imageUrl = row.getValue("imageUrl") as string;

            return <Image src={imageUrl} alt="profile img" width={24} height={24}></Image>;
        },
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
