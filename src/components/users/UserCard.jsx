
import Button from "../common/Button";

function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <div>
        <Button
          text="Edit"
          color="#2563eb"
          onClick={() => onEdit(user)}
        />

        <Button
          text="Delete"
          color="#dc2626"
          onClick={() => onDelete(user.id)}
        />
      </div>
    </div>
  );
}

export default UserCard;
