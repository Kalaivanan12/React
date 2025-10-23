import React, { useState } from "react";

function AddUserForm({ onUserAdded }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id || !formData.name || !formData.email || !formData.role) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const query = new URLSearchParams(formData).toString();
      const res = await fetch(`http://localhost:3101/write?${query}`);
      if (!res.ok) throw new Error("Failed to add user");

      await res.json();
      setFormData({ id: "", name: "", email: "", role: "" });
      if (onUserAdded) onUserAdded();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}
    >
      <input type="number" name="id" placeholder="ID" value={formData.id} onChange={handleChange} style={{ padding: "5px", width: "60px" }} />
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ padding: "5px", width: "150px" }} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ padding: "5px", width: "200px" }} />
      <select name="role" value={formData.role} onChange={handleChange} style={{ padding: "5px" }}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>
      <button type="submit" style={{ padding: "5px 10px" }} disabled={loading}>
        {loading ? "Adding..." : "Add User"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default AddUserForm;
