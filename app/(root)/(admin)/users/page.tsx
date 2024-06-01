import Users from "../../../_components/Users";
import { getUsers } from "../../../actions/users";

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div className="flex justify-start flex-col h-screen-9 max-h-screen-9 overflow-hidden">
            <Users users={users} />
        </div>
    );
};

export default UsersPage;
