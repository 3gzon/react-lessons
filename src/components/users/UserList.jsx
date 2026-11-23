import React from "react";
import UserCard from "./UserCard";

function UserList({users, onEdit, onDelete}) {
  return (
    <div>
      <h3>Users list ({users.length})</h3>
      {
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      }
    </div>
  )
}

export default UserList;
