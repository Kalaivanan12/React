import React from "react";
import { Link, Outlet } from "react-router-dom";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "5555555555" },
];

export default function Customer() {
  return (
    <div className="customers-container">
      <h1>👥 Customer List</h1>
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <Link 
                  to={`${c.id}`}   // ✅ relative path for nested route
                  state={{ customer: c }}
                  className="back-btn"
                >
                  Details
                </Link>
                {" | "}
                <Link 
                  to={`update/${c.id}`}  // ✅ nested update link
                  state={{ customer: c }}
                  className="back-btn"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Nested Route Content (CustomerDetails / UpdateCustomer) */}
      <Outlet />
    </div>
  );
}
