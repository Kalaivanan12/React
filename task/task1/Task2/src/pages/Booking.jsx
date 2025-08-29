// Booking.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Booking() {
  const cars = useSelector((state) => state.cars.list); // ✅ from Redux store

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} - ${form.car} on ${form.date}`);
    setForm({ name: "", email: "", phone: "", car: "", date: "" });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Car</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />

        {/* ✅ Car Dropdown from Redux */}
        <select name="car" value={form.car} onChange={handleChange} required>
          <option value="">-- Select Car --</option>
          {cars.map((c) => (
            <option key={c.id} value={c.model}>
              {c.brand} {c.model}
            </option>
          ))}
        </select>

        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
}
