import React from "react";
import { useForm } from "react-hook-form";
import "./RegForm.css";

export default function RegForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data ", data);
        alert("Registration Successful!");
    };

    return (
        <div className="form-container">
            <h2>REGISTRATION FORM</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <label>Name:</label>
                <input
                    type="text"
                    {...register("name", { required: "Enter a Name" })}
                    placeholder="Enter your full name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                {/* Email */}
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Enter a Email",
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
                        required: "Enter a Mobile number",
                        minLength: { value: 10, message: "Must be 10 digits" }
                    })}
                    placeholder="Enter mobile number"
                />
                {errors.mobile && <p className="error">{errors.mobile.message}</p>}

                {/* Birthday */}
                <label>Birthday:</label>
                <input
                    type="date"
                    {...register("birthday", { required: "Enter a Birthday" })}
                />
                {errors.birthday && <p className="error">{errors.birthday.message}</p>}

                {/* Gender */}
                <div className="form-group">
                    <p>Gender:</p>
                    <label>
                        <input type="radio" value="Male" {...register("gender", { required: "Select Gender" })} />
                        Male
                    </label>
                    <label>
                        <input type="radio" value="Female" {...register("gender", { required: "Select Gender" })} />
                        Female
                    </label>
                    {errors.gender && <p className="error">{errors.gender.message}</p>}
                </div>

                {/* Interests */}
                <div className="form-group">
                    <p>Interests:</p>
                    <label>
                        <input type="checkbox" value="Sports" {...register("interests", { required: "Select interest" })} />
                        Sports
                    </label>
                    <label>
                        <input type="checkbox" value="Music" {...register("interests", { required: "Select interest" })} />
                        Music
                    </label>
                    <label>
                        <input type="checkbox" value="Coding" {...register("interests", { required: "Select interest" })} />
                        Coding
                    </label>
                    <label>
                        <input type="checkbox" value="Travel" {...register("interests", { required: "Select interest" })} />
                        Travel
                    </label>
                    {errors.interests && <p className="error">{errors.interests.message}</p>}
                </div>

                {/* Country */}
                <label>Country:</label>
                <select {...register("country", { required: "Select Country" })}>
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
                    {...register("profilePic", { required: "Select Profile picture" })}
                />
                {errors.profilePic && <p className="error">{errors.profilePic.message}</p>}

                {/* Submit */}
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}
