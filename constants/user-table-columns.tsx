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

            return (
                <Image
                    className="rounded-full"
                    src={imageUrl}
                    alt="profile img"
                    width={24}
                    height={24}
                ></Image>
            );
        },
        maxSize: 150,
        minSize: 50,
        size: 100,
    },
    {
        accessorKey: "firstName",
        header: "First Name",
        maxSize: 150,
        minSize: 50,
        size: 100,
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
        maxSize: 150,
        minSize: 50,
        size: 100,
    },
];
