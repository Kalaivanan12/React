import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    let url = `http://localhost:3101/users?search=${search}&filter=${filter}&sort=${sort}`;
    const res = await fetch(url);
    const data = await res.json();
    setUsers(Array.isArray(data) ? data : []);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await fetch(`http://localhost:3101/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  const handleUpdate = async (updatedUser) => {
    await fetch(`http://localhost:3101/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    setEditingUser(null);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [search, filter, sort]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management Dashboard</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>
      <button onClick={fetchUsers}>Refresh</button>

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <AddUserForm
        onUserAdded={fetchUsers}
        editingUser={editingUser}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
