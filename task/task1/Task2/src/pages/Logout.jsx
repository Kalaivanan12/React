import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login session
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");

    // Redirect to login after 2s
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h2>You have been logged out ✅</h2>
        <p>Redirecting to Login...</p>
      </div>
    </div>
  );
}
