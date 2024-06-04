"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useUserUpdate from "../../hooks/useUserUpdate";
import Spinner from "../../components/ui/Spinner";
import { UserResource } from "@clerk/types";

export interface ProfileProps {
    params: {
        userId: string;
    };
}

const Profile = ({ params }: ProfileProps) => {
    const [formData, setFormData] = useState<Partial<UserResource>>({});
    const { user, updateUser, loading } = useUserUpdate(params.userId);

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

        await updateUser(formData);
    };

    if (loading) {
        return (
            <div className="flex justify-start flex-col h-screen-9 max-h-screen-9 overflow-hidden">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="flex w-full h-full overflow-y-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between w-full space-y-6 max-w-3xl mx-auto my-8 p-6 shadow-lg rounded-md bg-white"
            >
                <div>
                    {user?.imageUrl && (
                        <div className="flex flex-col items-center">
                            <Image
                                unoptimized
                                src={user?.imageUrl ?? ""}
                                alt="Profile"
                                className="rounded-full object-cover"
                                width={150}
                                height={150}
                            />
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex flex-col my-2">
                        <label className="text-lg font-semibold text-gray-700 mb-2 capitalize">
                            Ime
                        </label>
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
                        <label className="text-lg font-semibold text-gray-700 mb-2 capitalize">
                            Priimek
                        </label>
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
                        <label className="text-lg font-semibold text-gray-700 mb-2 capitalize">
                            Uporabniško ime
                        </label>
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
                        <label className="text-lg font-semibold text-gray-700 mb-2">Email</label>
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
                        <label className="text-lg font-semibold text-gray-700 mb-2">Telefon</label>
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
                        Shrani
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
