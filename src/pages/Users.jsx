import React, { useEffect, useState } from "react";
import AddUserForm from "../components/users/AddUserForm"
import UserList from "../components/users/UserList";
import EditUserForm from "../components/users/EditUserForm";

function Users() {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)

    const getUsers = () => {
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }

    useEffect(() => {
        getUsers();
    }, [])

    const updateUser = (name, email) => {
        fetch(`http://localhost:3001/users/${editUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editUser)
        }).then(() => {
            getUsers();
            setEditUser(null)
        })
    }

    return (
        <div className="container">
            {!editUser && <AddUserForm getUsers={getUsers} />}
            {editUser && (
                <EditUserForm
                    key={editUser.id}
                    user={editUser}
                    onUpdate={updateUser}
                    onCancel={() => setEditUser(null)}
                />
            )}
            {
                <UserList
                    users={users}
                    onEdit={setEditUser}
                />
            }
        </div>
    )
}

export default Users;
