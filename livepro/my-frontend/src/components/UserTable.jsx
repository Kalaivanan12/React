import React from "react";

function UserTable({ users }) {
  const safeUsers = Array.isArray(users) ? users : [];

  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Role</th>
        </tr>
      </thead>
      <tbody>
        {safeUsers.length > 0 ? (
          safeUsers.map((u) => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.email}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.role}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center", padding: "8px" }}>
              No users found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
