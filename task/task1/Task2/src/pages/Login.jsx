import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Simple hardcoded credentials (for demo)
    const validId = "admin";
    const validPasswd = "1234";

    if (id === validId && passwd === validPasswd) {
      // store login in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", id);

      navigate("/"); // redirect to homepage after login
    } else {
      setError("Invalid ID or Password ❌");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
