import React, { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    setSuccessMessage(""); // Clear success message when user edits
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)){
      errors.name = "Name can only contain letters";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone must be 10 digits";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSuccessMessage("✅ Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  // 🔁 useEffect to auto-clear the success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer); // Cleanup
    }
  }, [successMessage]);

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={formErrors.name ? "error-input" : ""}
          />
          {formErrors.name && <p className="error-text">{formErrors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "error-input" : ""}
          />
          {formErrors.email && <p className="error-text">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={formErrors.phone ? "error-input" : ""}
          />
          {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
        </div>

        <button type="submit">Submit</button>
        {successMessage && <p className="success-text">{successMessage}</p>}
      </form>
    </div>
  );
}

export default Form;
