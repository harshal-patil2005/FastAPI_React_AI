import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "../api/userApi";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const addUser = async () => {
    await createUser({
      id: users.length + 1,
      name: "Harshal",
      email: "harshal@gmail.com",
    });
    loadUsers();
  };

  const deleteMaxUser = async () => {
    if (users.length === 0) {
      alert("No users to delete");
      return;
    }

    // find max id
    const maxId = Math.max(...users.map((u) => u.id));

    await deleteUser(maxId);
    loadUsers();
  };
  // and this function jsut calling deleteUser and actual deletion will take place at backend

  return (
    <div style={{ padding: "20px" }}>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>

      <button onClick={addUser}>Add User</button>

      <button onClick={deleteMaxUser} style={{ marginLeft: "10px" }}>
        Delete Max ID User
      </button>
    </div>
  );
}

export default UserList;