import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function EditUserForm({user, onUpdate, onCancel}) {
  const [name, setName]=useState(user.name)
  const [email, setEmail]=useState(user.email)
  return (
    <div className="form-card">
    <h2>Edit user</h2>
    <Input
        placeholder="first name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
    />
    <Input
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    />
    <Button
        text="Update"
        color="blue"
        onClick={onUpdate}
    />
    <Button
        text="Cancel"
        color="orange"
        onClick={onCancel}
    />
</div>
  )
}

export default EditUserForm;
