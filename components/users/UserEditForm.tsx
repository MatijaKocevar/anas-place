"use client";

import React, { useState } from "react";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";

export interface UserEditFormProps {
    user: User;
}

const UserEditForm: React.FC<UserEditFormProps> = ({ user }) => {
    const [formData, setFormData] = useState({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        username: user.username || "",
        emailAddresses: user.emailAddresses || [],
        imageUrl: user.imageUrl || "",
        phoneNumbers: user.phoneNumbers || [],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
        const { name, value } = e.target;

        if (typeof index === "number") {
            const updatedEmailAddresses = [...formData.emailAddresses];
            updatedEmailAddresses[index] = { ...updatedEmailAddresses[index], emailAddress: value };
            setFormData({
                ...formData,
                emailAddresses: updatedEmailAddresses,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Data after changes:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between w-full space-y-6 max-w-3xl mx-auto my-8 p-6 shadow-lg rounded-md bg-white"
        >
            <div>
                {formData.imageUrl && (
                    <div className="flex flex-col items-center">
                        <Image
                            src={formData.imageUrl}
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
                        value={formData.firstName}
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
                        value={formData.lastName}
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
                        value={formData.username}
                        onChange={handleInputChange}
                        title="Username"
                        className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-lg font-semibold text-gray-700 mb-2">Emails</label>
                    {formData.emailAddresses.map((email, index) => (
                        <input
                            key={email.id}
                            type="text"
                            name="emailAddress"
                            value={email.emailAddress}
                            onChange={(e) => handleInputChange(e, index)}
                            title="Email"
                            className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                    ))}
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-lg font-semibold text-gray-700 mb-2">Phone numbers</label>
                    {formData.phoneNumbers.map((number, index) => (
                        <input
                            key={number.id}
                            type="text"
                            name="phoneNumber"
                            value={number.phoneNumber}
                            onChange={(e) => handleInputChange(e, index)}
                            title="Email"
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
    );
};

export default UserEditForm;
