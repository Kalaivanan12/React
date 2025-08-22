import React from "react";
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

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/customers">Customers</Link>
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
      </Routes>
    </div>
  );
}
