import React from "react";
import { useForm } from "react-hook-form";
import "./RegFrom.css";

export default function RegForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data ✅", data);
        alert("Registration Successful!");
    };

    return (
        <div className="form-container">
            <h2>STUDENT REGISTRATION FORM</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <label>Name:</label>
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your full name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                {/* Email */}
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Invalid email format",
                        },
                    })}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                {/* Mobile */}
                <label>Mobile Number:</label>
                <input
                    type="tel"
                    {...register("mobile", {
                        required: "Mobile number is required",
                        minLength: { value: 10, message: "Must be 10 digits" },
                        maxLength: { value: 10, message: "Must be 10 digits" },
                    })}
                    placeholder="Enter mobile number"
                />
                {errors.mobile && <p className="error">{errors.mobile.message}</p>}

                {/* Birthday */}
                <label>Birthday:</label>
                <input
                    type="date"
                    {...register("birthday", { required: "Birthday is required" })}
                />
                {errors.birthday && <p className="error">{errors.birthday.message}</p>}

                {/* Gender */}
                <label>Gender:</label>
                <div className="gender-group">
                    <label>
                        <input type="radio" value="Male" {...register("gender", { required: true })} /> Male
                    </label>
                    <label>
                        <input type="radio" value="Female" {...register("gender", { required: true })} /> Female
                    </label>
                    <label>
                        <input type="radio" value="Other" {...register("gender", { required: true })} /> Other
                    </label>
                </div>
                {errors.gender && <p className="error">Gender is required</p>}

                {/* Interests */}
                <label>Interests:</label>
                <div className="interest-group">
                    <label>
                        <input type="checkbox" value="Sports" {...register("interests")} /> Sports
                    </label>
                    <label>
                        <input type="checkbox" value="Music" {...register("interests")} /> Music
                    </label>
                    <label>
                        <input type="checkbox" value="Coding" {...register("interests")} /> Coding
                    </label>
                    <label>
                        <input type="checkbox" value="Travel" {...register("interests")} /> Travel
                    </label>
                </div>

                {/* Country */}
                <label>Country:</label>
                <select {...register("country", { required: "Country is required" })}>
                    <option value="">--Select Country--</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>
                {errors.country && <p className="error">{errors.country.message}</p>}

                {/* Profile Pic */}
                <label>Profile Picture:</label>
                <input
                    type="file"
                    accept="image/*"
                    {...register("profilePic", { required: "Profile picture is required" })}
                />
                {errors.profilePic && <p className="error">{errors.profilePic.message}</p>}

                {/* Submit */}
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}
