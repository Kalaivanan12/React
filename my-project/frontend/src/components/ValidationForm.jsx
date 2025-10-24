import React, { useState } from "react";
// import "./ValidationForm.css";

// Inline CSS
const styles = {
    container: {
        maxWidth: "450px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        alignSelf: "center",
        width: "80%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    button: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: "12px",
        marginTop: "-8px",
    },
};

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

    // Validation
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

    // Input change handler
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        });
    };

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit clicked");

        if (!validate()) return;

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });

            const response = await fetch("http://localhost:3101/api/register", {
                method: "POST",
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok) {
                alert("Form submitted successfully!");
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
                alert("Error: " + (result.message || "Something went wrong"));
            }
        } catch (err) {
            console.error(err);
            alert("Could not connect to backend");
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
                
                {/* Gender - Radio Buttons */}
                <label>Gender:</label>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    {["Male", "Female", "Other"].map((gender) => (
                        <label key={gender} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={formData.gender === gender}
                                onChange={handleChange}
                            />
                            {gender}
                        </label>
                    ))}
                </div>
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

                {/* Submit */}
                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ValidationForm;
