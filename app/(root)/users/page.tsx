import { clerkClient } from "@clerk/nextjs";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const UsersPage = async () => {
    const users = await clerkClient.users.getUserList({ limit: 100 });

    return (
        <h1 className="text-black">
            <DataTable columns={columns} data={JSON.parse(JSON.stringify(users))} />
        </h1>
    );
};

export default UsersPage;
