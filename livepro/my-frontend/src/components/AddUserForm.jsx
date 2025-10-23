import React, { useState, useEffect } from "react";

function AddUserForm({ onUserAdded, editingUser, onUpdate }) {
  const [formData, setFormData] = useState({ id: "", name: "", email: "", role: "" });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.email || !formData.role) {
      alert("Please fill all fields");
      return;
    }

    if (editingUser) {
      await onUpdate(formData);
    } else {
      await fetch(`http://localhost:3101/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      onUserAdded();
    }

    setFormData({ id: "", name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input type="number" name="id" value={formData.id} onChange={handleChange} placeholder="ID" disabled={!!editingUser} />
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>
      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
    </form>
  );
}

export default AddUserForm;
