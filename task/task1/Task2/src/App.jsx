import React from "react";
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
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartCount = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/cart">Cart ({cartCount})</Link>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link className="login-btn" to="/login">
            Login
          </Link>
        )}
      </nav>

      {/* ✅ Routes */}
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
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
