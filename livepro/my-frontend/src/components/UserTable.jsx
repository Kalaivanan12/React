import React from "react";

function UserTable({ users, onEdit, onDelete }) {
  const safeUsers = Array.isArray(users) ? users : [];

  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {safeUsers.length > 0 ? (
          safeUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => onEdit(u)} style={{ marginRight: "5px" }}>✏️ Edit</button>
                <button onClick={() => onDelete(u.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
