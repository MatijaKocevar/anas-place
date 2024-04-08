"use client";

import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { userTableColumns } from "../../../../constants/user-table-columns";
import React, { useEffect, useState } from "react";
import { User } from "@clerk/nextjs/server";
import { Input } from "../../../../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";

const UsersPage = () => {
    const [data, setData] = useState<User[]>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const table = useReactTable({
        data,
        columns: userTableColumns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/users/api/get-users");

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const users = await response.json();
                setData(users);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch users", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        console.log("datache changed", data);
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter by name..."
                    value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("firstName")?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    className="hover:bg-muted-1 cursor-pointer"
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    onClick={() => router.push(`/users/update/${row.original.id}`)}
                                >
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={userTableColumns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default UsersPage;
