import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function CustomerDetails() {
  const { id } = useParams();
  const location = useLocation();
  const customer = location.state?.customer;

  if (!customer) {
    return (
      <div className="customers-container">
        <p>Customer not found.</p>
        <Link to="/customers" className="back-btn">◄ Back to Customers</Link>
      </div>
    );
  }

  return (
    <div className="customers-container">
      <h1>Customer Details</h1>
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>

      <div style={{ marginTop: "20px" }}>
        <Link
          to={`/customers/update/${customer.id}`}
          state={{ customer }}
          className="back-btn"
        >
          ✏ Update Customer
        </Link>
        <Link to="/customers" className="back-btn" style={{ marginLeft: "10px" }}>
          ◄ Back to Customers
        </Link>
      </div>
    </div>
  );
}
