"use client";

import { User } from "@clerk/nextjs/server";
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface UpdateUserPageProps {
    params: {
        userId: string;
    };
}

const UpdateUserPage = ({ params }: UpdateUserPageProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState<Partial<User>>({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`/users/api/get-user/${params.userId}`);

            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            setUser(await response.json());
        };

        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- run on mount
    }, []);

    useEffect(() => {
        if (user) {
            setFormData({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                emailAddresses: user.emailAddresses,
                phoneNumbers: user.phoneNumbers,
            });
        }
    }, [user]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index?: number,
        type?: "emailAddresses" | "phoneNumbers"
    ) => {
        const { name, value } = e.target;

        if (type) {
            const updatedArray = formData[type]?.map((item, idx) => {
                if (idx === index) {
                    console.log({ ...item, [name]: value });
                    return { ...item, [name]: value };
                }
                return item;
            });
            setFormData({
                ...formData,
                [type]: updatedArray,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const endpoint = `/users/api/update-user/${params.userId}`;
            const response = await fetch(endpoint, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to update user: " + response.statusText);
            }

            await response.json();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="flex w-full h-full">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between w-full space-y-6 max-w-3xl mx-auto my-8 p-6 shadow-lg rounded-md bg-white"
            >
                <div>
                    {user?.imageUrl && (
                        <div className="flex flex-col items-center">
                            <Image
                                src={user?.imageUrl ?? ""}
                                alt="Profile"
                                className="rounded-full object-cover mb-4"
                                width={200}
                                height={200}
                            />
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex flex-col my-2">
                        <label className="text-lg font-semibold text-gray-700 mb-2 capitalize">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName ?? ""}
                            onChange={handleInputChange}
                            title="First Name"
                            className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-lg font-semibold text-gray-700 mb-2 capitalize">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName ?? ""}
                            onChange={handleInputChange}
                            title="Last Name"
                            className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-lg font-semibold text-gray-700 mb-2 capitalize">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username ?? ""}
                            onChange={handleInputChange}
                            title="Username"
                            className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-lg font-semibold text-gray-700 mb-2">Emails</label>
                        {formData.emailAddresses?.map((email, index) => (
                            <input
                                key={email.id}
                                type="text"
                                name="emailAddress"
                                value={email.emailAddress}
                                onChange={(e) => handleInputChange(e, index, "emailAddresses")}
                                title="Email"
                                disabled
                                className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-lg font-semibold text-gray-700 mb-2">Phone numbers</label>
                        {formData.phoneNumbers?.map((phoneNumber, index) => (
                            <input
                                key={phoneNumber.id}
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber.phoneNumber}
                                onChange={(e) => handleInputChange(e, index, "phoneNumbers")}
                                title="Email"
                                disabled
                                className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUserPage;
