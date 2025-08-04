import React, { useState } from "react";
// import Work from "./components/Work";
import "./Work.css"; 

const Work = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter valid email";
    if (formData.password.length < 6) newErrors.password = "Password must be 6+ characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
      // Reset
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <div className="error-text">{errors.name}</div>
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <div className="error-text">{errors.email}</div>
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <div className="error-text">{errors.password}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default Work;
