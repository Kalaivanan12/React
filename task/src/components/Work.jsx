import React, { useState } from "react";
import "./Work.css";

const Work = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Enter a valid 10-digit phone number";
    }
   

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className="form-container">
      <center><h2>USER</h2></center>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Work;
