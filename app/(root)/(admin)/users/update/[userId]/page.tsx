import { clerkClient } from "@clerk/nextjs";
import UserEditForm from "../../../../../../components/users/UserEditForm";
import { User } from "@clerk/nextjs/server";

interface UpdateUserPageProps {
    params: {
        userId: string;
    };
}

const UpdateUserPage = async ({ params }: UpdateUserPageProps) => {
    const user: User = await clerkClient.users?.getUser(params.userId);

    return <div>{<UserEditForm user={JSON.parse(JSON.stringify(user))} />}</div>;
};

export default UpdateUserPage;
