import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/authSlice";
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
import Booking from "./pages/Booking";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Footer from "./pages/Footer";

// ProtectedRoute using Redux
function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ For hamburger toggle
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartCount = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="app-wrapper">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="nav-brand">Car<span className="nav-brand">Makes</span></div>

        {/* Hamburger toggle */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cars" onClick={() => setMenuOpen(false)}>Cars</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/customers" onClick={() => setMenuOpen(false)}>Customers</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({cartCount})</Link>

          {isLoggedIn ? (
            <button
              className="logout-btn"
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <Link className="login-btn" to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* ✅ Main content */}
      <main className="content">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

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
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* ✅ Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;
