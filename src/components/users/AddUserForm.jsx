import React, { useState } from "react";
import Input from "../common/Input"
import Button from "../common/Button"

function AddUserForm({ getUsers }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const addUser = () => {
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        }).then((response) => response.json())
            .then(() => {
                getUsers();
                setEmail("");
                setName("")
            })
    }
    
    return (
        <div className="form-card">
            <h2>Add new user</h2>
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
                text="Add user"
                color="blue"
                onClick={addUser}
            />
      </div>
  )
}

export default AddUserForm;
