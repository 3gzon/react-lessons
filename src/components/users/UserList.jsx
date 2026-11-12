
import UserCard from "./UserCard";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h2>Users List ({users.length})</h2>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default UserList;
