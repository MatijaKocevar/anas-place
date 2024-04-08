import UserEditForm from "../../../../../../components/users/UserEditForm";

interface UpdateUserPageProps {
    params: {
        userId: string;
    };
}

const UpdateUserPage = async ({ params }: UpdateUserPageProps) => {
    return (
        <div className="flex w-full h-full">
            <UserEditForm userId={params.userId} />
        </div>
    );
};

export default UpdateUserPage;
