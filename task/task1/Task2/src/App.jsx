import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
import Cart from "./pages/Cart"; // ✅ import Cart page
import { CartContext } from "./pages/CartContext"; // ✅ import CartContext

export default function App() {
  const { cart } = useContext(CartContext); // ✅ get cart from context

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/customers">Customers</Link>

        {/* ✅ Cart with count */}
        <Link to="/cart"> Cart ({cart.length})</Link>
      </nav>

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Cars (nested routes) */}
        <Route path="/cars" element={<Cars />}>
          <Route path=":id" element={<CarDetails />} />
          <Route path="update/:id" element={<UpdateCar />} />
        </Route>

        {/* Services */}
        <Route path="/services" element={<Services />} />

        {/* Customers (nested routes) */}
        <Route path="/customers" element={<Customer />}>
          <Route path=":id" element={<CustomerDetails />} />
          <Route path="update/:id" element={<UpdateCustomer />} />
        </Route>

        {/* ✅ Cart Page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
