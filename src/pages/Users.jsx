
import { useState, useEffect } from "react";
import AddUserForm from "../components/users/AddUserForm";
import EditUserForm from "../components/users/EditUserForm";
import UserList from "../components/users/UserList";

function Users() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // GET USERS
  const getUsers = () => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  // DELETE USER
  const deleteUser = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE"
    }).then(() => {
      getUsers();

      if (editUser && editUser.id === id) {
        setEditUser(null);
      }
    });
  };

  const closeEdit = () => {
    setEditUser(null);
    getUsers();
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      {!editUser && (
        <AddUserForm getUsers={getUsers} />
      )}

      {editUser && (
        <EditUserForm
          key={editUser.id}
          user={editUser}
          onClose={closeEdit}
        />
      )}

      <UserList
        users={users}
        onEdit={setEditUser}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default Users;
