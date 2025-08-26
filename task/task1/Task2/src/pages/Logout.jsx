import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // clear login state
    navigate("/login"); // go back to login
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
}
