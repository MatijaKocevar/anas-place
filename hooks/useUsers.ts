import { User } from "@clerk/nextjs/server";
import { useState, useEffect } from "react";
import { getUsers } from "../app/actions/users";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const users = await getUsers();

            if (!users) throw new Error("Failed to fetch users");

            setUsers(users);
        };

        fetchUsers();
    }, []);

    return { users, loading };
};

export default useUsers;
