import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // ✅ Example: check login from localStorage
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  // if not logged in, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // if logged in, show the children
  return children;
}
