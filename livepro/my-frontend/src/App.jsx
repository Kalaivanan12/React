import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      let url = "http://localhost:3101/users?";
      if (search) url += `search=${search}&`;
      if (filter) url += `filter=${filter}&`;
      if (sort) url += `sort=${sort}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search, filter, sort]);

  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Management Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="">Sort By</option>
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>

      <button onClick={fetchUsers} style={{ padding: "5px 10px" }}>
        🔄 Refresh
      </button>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <UserTable users={users} />
      <AddUserForm onUserAdded={fetchUsers} />
    </div>
  );
}

export default App;
