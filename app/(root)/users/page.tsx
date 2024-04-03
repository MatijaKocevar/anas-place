import { clerkClient } from "@clerk/nextjs";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const UsersPage = async () => {
    const users = await clerkClient.users.getUserList({ limit: 100 });

    return (
        <div>
            <DataTable columns={columns} data={JSON.parse(JSON.stringify(users))} />
        </div>
    );
};

export default UsersPage;
