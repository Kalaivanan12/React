import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

// pages...
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import UpdateCar from "./pages/UpdateCar";
import Services from "./pages/Services";
import Customer from "./pages/Customer";
import CustomerDetails from "./pages/CustomerDetails";
import UpdateCustomer from "./pages/UpdateCustomer";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

// ✅ Protected Route wrapper (only checks login)
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "/login"; // redirect after logout
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/cart">Cart</Link>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      {/* ✅ Routes */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route
          path="/cars"
          element={
            <ProtectedRoute>
              <Cars />
            </ProtectedRoute>
          }
        >
          <Route path=":id" element={<CarDetails />} />
          <Route path="update/:id" element={<UpdateCar />} />
        </Route>

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customer />
            </ProtectedRoute>
          }
        >
          <Route path=":id" element={<CustomerDetails />} />
          <Route path="update/:id" element={<UpdateCustomer />} />
        </Route>

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
