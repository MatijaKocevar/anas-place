import { useUser } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { useEffect, useState } from "react";

const useUserUpdate = (userId: string) => {
    const [user, setUser] = useState<UserResource | null>(null);
    const [loading, setLoading] = useState(true);

    const { user: currentUser } = useUser();

    useEffect(() => {
        const fetchUser = async () => {
            if (!userId) {
                setLoading(false);
                throw new Error("No user ID provided");
            }

            if (currentUser && userId === currentUser.id) {
                setUser(currentUser);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await fetch(`/api/users/get-user/${userId}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }

                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error("Failed to fetch user: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId, currentUser]);

    const updateUser = async (formData: Partial<UserResource>) => {
        try {
            setLoading(true);

            if (currentUser && userId === currentUser.id) {
                const updatedUser = await currentUser.update({
                    firstName: formData.firstName ?? "",
                    lastName: formData.lastName ?? "",
                    username: formData.username ?? "",
                });

                setUser(updatedUser);
                return;
            }

            const endpoint = `/api/users/update-user/${userId}`;
            const response = await fetch(endpoint, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to update user: " + response.statusText);

            const updatedUserData = (await response.json()) as UserResource;
            setUser(updatedUserData);
        } catch (error) {
            throw new Error("Failed to update user");
        } finally {
            setLoading(false);
        }
    };

    return { user, loading, updateUser };
};

export default useUserUpdate;
