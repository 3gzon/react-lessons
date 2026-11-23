import React from "react";
import Button from "../common/Button";

function UserCard({user, onEdit, onDelete}) {
  return (
    <div className="user-card">
      <div>
        <h3>{user.name}</h3>
        <p>{ user.email}</p>
      </div>
      <div>
        <Button
          text="Edit"
          color="blue"
          onClick={()=>onEdit(user)}
        />
         <Button
          text="Delete"
          color="red"
          onClick={()=>onDelete(user.id)}
        />
      </div>
    </div>
  )
}

export default UserCard;
