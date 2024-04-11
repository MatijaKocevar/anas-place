"use client";

import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { userTableColumns } from "../../../../constants/user-table-columns";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../../../components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../components/ui/table";
import useUsers from "../../../../hooks/useUsers";
import { Button } from "../../../../components/ui/button";
import useCalculateTablePageSize from "../../../../hooks/useCalculateTablePageSize";
import Spinner from "../../../../components/ui/Spinner";

const UsersPage = () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const router = useRouter();
    const { users, loading } = useUsers();
    const [pageIndex, setPageIndex] = useState(0);
    const tableOptionsRef = useRef<HTMLDivElement>(null);
    const tableHeadRowRef = useRef<HTMLDivElement>(null);
    const tableBodyRef = useRef<HTMLDivElement>(null);

    const pageSize = useCalculateTablePageSize({
        loading,
        tableOptionsRef,
        tableHeadRowRef,
        tableBodyRef,
    });

    const table = useReactTable({
        data: users,
        columns: userTableColumns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            columnFilters,
            pagination: {
                pageIndex,
                pageSize,
            },
        },
        initialState: {
            pagination: {
                pageSize,
            },
            columnFilters,
        },
    });

    useEffect(() => {
        const totalRows = users.length;

        const totalPages = pageSize > 0 ? Math.ceil(totalRows / pageSize) : 0;

        if (pageIndex + 1 > totalPages) {
            const newPageIndex = Math.max(0, totalPages - 1);
            setPageIndex(newPageIndex);
        }
    }, [pageSize, users.length, pageIndex]);

    if (loading) {
        return (
            <div className="flex justify-start flex-col h-screen-9 max-h-screen-9 overflow-hidden">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="flex justify-start flex-col h-screen-9 max-h-screen-9 overflow-hidden">
            <div ref={tableOptionsRef} className="flex justify-between items-center py-2 pb-4">
                <div>
                    <Input
                        placeholder="Filter by name..."
                        value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("firstName")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
                <div className="flex flex-row">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPageIndex(pageIndex - 1)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPageIndex(pageIndex + 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
            <div className="rounded-md border overflow-auto">
                <div ref={tableHeadRowRef} className="sticky top-0 z-50">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                className="bg-white w-[33%] px-2"
                                                key={header.id}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column.columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                    </Table>
                </div>

                <div ref={tableBodyRef} className="overflow-auto">
                    <Table>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        className="table-body-row hover:bg-muted-1 cursor-pointer"
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        onClick={() =>
                                            router.push(`/users/update/${row.original.id}`)
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => {
                                            return (
                                                <TableCell className="w-[33%] px-2" key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={userTableColumns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
