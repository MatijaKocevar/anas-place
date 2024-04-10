import { User } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

const useUserUpdate = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            if (!userId) {
                setLoading(false);
                throw new Error("No user ID provided");
            }

            try {
                setLoading(true);
                const response = await fetch(`/users/api/get-user/${userId}`);

                if (!response.ok) throw new Error("Failed to fetch user");

                const userData = (await response.json()) as User;
                setUser(userData);
            } catch (error) {
                throw new Error("Failed to fetch user");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    const updateUser = async (formData: Partial<User>) => {
        try {
            setLoading(true);
            const endpoint = `/users/api/update-user/${userId}`;
            const response = await fetch(endpoint, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to update user: " + response.statusText);

            await response.json();
        } catch (error) {
            throw new Error("Failed to update user");
        } finally {
            setLoading(false);
        }
    };

    return { user, loading, updateUser };
};

export default useUserUpdate;
