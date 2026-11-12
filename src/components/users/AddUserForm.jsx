
import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function AddUserForm({ getUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then((res) => res.json())
      .then(() => {
        getUsers();
        setName("");
        setEmail("");
      });
  };

  return (
    <div className="form-card">
      <h2>Add New User</h2>

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
        text="Add User"
        color="#2563eb"
        onClick={addUser}
      />
    </div>
  );
}

export default AddUserForm;
