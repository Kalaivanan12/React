import React, { useState } from "react";
import "./ValidationForm.css";

function ValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    file: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // ✅ Validate input
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.gender) newErrors.gender = "Select gender";
    if (!formData.file) newErrors.file = "Please upload a file";
    if (!formData.terms)
      newErrors.terms = "You must accept the terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  // ✅ Submit form (send to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const res = await fetch("http://localhost:3101/api/register", {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        alert("✅ Form submitted successfully and saved to MongoDB!");
        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          gender: "",
          file: null,
          terms: false,
        });
        setErrors({});
      } else {
        alert("❌ Something went wrong while saving data");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Unable to connect to backend");
    }
  };

  return (
    <div className="form-container" style={styles.container}>
      <h2 style={styles.heading}>Validation Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        {/* Phone */}
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.phone && <p style={styles.error}>{errors.phone}</p>}

        {/* Gender */}
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p style={styles.error}>{errors.gender}</p>}

        {/* File Upload */}
        <label>Upload File:</label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          style={styles.input}
        />
        {errors.file && <p style={styles.error}>{errors.file}</p>}

        {/* Terms */}
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            style={{ marginRight: "10px" }}
          />
          Accept Terms & Conditions
        </label>
        {errors.terms && <p style={styles.error}>{errors.terms}</p>}

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default ValidationForm;