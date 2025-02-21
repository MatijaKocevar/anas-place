import Profile, { ProfileProps } from "../../../../_components/Profile";

const UpdateUserPage = async ({ params }: ProfileProps) => {
    return <Profile params={await params} />;
};

export default UpdateUserPage;
