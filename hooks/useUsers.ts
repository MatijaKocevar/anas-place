import { User } from "@clerk/nextjs/server";
import { useState, useEffect } from "react";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch("/users/api/get-users");

                if (!response.ok) throw new Error("Failed to fetch users");

                const users = await response.json();
                setUsers(users);
            } catch (error) {
                throw new Error("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading };
};

export default useUsers;
