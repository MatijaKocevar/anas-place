"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ClerkUser } from "../actions/users";

export const userTableColumns: ColumnDef<ClerkUser>[] = [
    {
        accessorKey: "imageUrl",
        header: "",
        cell: ({ row }) => {
            const imageUrl = row.getValue("imageUrl") as string;

            return (
                <Image
                    unoptimized
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
        header: "Ime",
        maxSize: 150,
        minSize: 50,
        size: 100,
    },
    {
        accessorKey: "lastName",
        header: "Priimek",
        maxSize: 150,
        minSize: 50,
        size: 100,
    },
];
