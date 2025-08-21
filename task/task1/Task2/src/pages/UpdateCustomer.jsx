import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateCustomer() {
  const location = useLocation();
  const navigate = useNavigate();
  const customer = location.state?.customer;

  const [name, setName] = useState(customer?.name || "");
  const [email, setEmail] = useState(customer?.email || "");
  const [phone, setPhone] = useState(customer?.phone || "");

  if (!customer) {
    return <p>❌ Customer data not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCustomer = { ...customer, name, email, phone };
    console.log("Updated Customer:", updatedCustomer);

    navigate(`/customers/${customer.id}`, { state: { customer: updatedCustomer } });
  };

  return (
    <div className="customers-container">
      <h1>Update Customer</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
