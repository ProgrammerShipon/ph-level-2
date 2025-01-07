import { AddUserModal } from "@/modules/users/AddUser";
import UserCard from "@/modules/users/UserCard";
import { selectUser } from "@/redux/features/users/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function Users() {
  // const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Users</h1>
        <div className="flex items-center gap-5">
          {/* modal */}
          <AddUserModal />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
