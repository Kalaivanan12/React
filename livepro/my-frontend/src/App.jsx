import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // ✅ Fetch users from backend
  const fetchUsers = async () => {
    let url = "http://localhost:3101/users?";
    if (search) url += `search=${search}&`;
    if (filter) url += `filter=${filter}&`;
    if (sort) url += `sort=${sort}`;
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, [search, filter, sort]);

  return (
    <div className="container">
      <h1>User Management Dashboard</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />

      {/* 🧭 Filter */}
      <select onChange={(e) => setFilter(e.target.value)} className="input">
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>

      {/* ↕️ Sort */}
      <select onChange={(e) => setSort(e.target.value)} className="input">
        <option value="">Sort By</option>
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>

      <button onClick={fetchUsers} className="refresh-btn">🔄 Refresh</button>

      {/* 📋 User Table */}
      <UserTable users={users} />

      {/* ➕ Add User */}
      <AddUserForm onUserAdded={fetchUsers} />
    </div>
  );
}

export default App;
