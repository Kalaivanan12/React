import React, { useState } from "react";

function AddUserForm({ onUserAdded }) {
  const [form, setForm] = useState({ id: "", name: "", email: "", role: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, name, email, role } = form;

    if (!id || !name || !email || !role) {
      alert("Please fill all fields!");
      return;
    }

    const res = await fetch(
      `http://localhost:3101/write?id=${id}&name=${name}&email=${email}&role=${role}`
    );

    if (res.ok) {
      alert("✅ User added successfully!");
      setForm({ id: "", name: "", email: "", role: "" });
      onUserAdded();
    } else {
      alert("❌ Error adding user!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add New User</h2>
      <input
        type="number"
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role (Admin/User)"
        value={form.role}
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
