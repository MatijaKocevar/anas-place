import React from "react";

interface UpdateUserPageProps {
    params: {
        userId: string;
    };
}

const UpdateUserPage = ({ params }: UpdateUserPageProps) => {
    return <div>{params.userId}</div>;
};

export default UpdateUserPage;
