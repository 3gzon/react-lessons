
import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function EditUserForm({ user, onClose }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const updateUser = () => {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then((res) => res.json())
      .then(() => {
        onClose();
      });
  };

  return (
    <div className="form-card">
      <h2>Edit User</h2>

      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        text="Update"
        color="#2563eb"
        onClick={updateUser}
      />

      <Button
        text="Cancel"
        color="#64748b"
        onClick={onClose}
      />
    </div>
  );
}

export default EditUserForm;
