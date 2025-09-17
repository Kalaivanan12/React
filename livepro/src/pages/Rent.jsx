import React from "react";
import { NavLink } from "react-router-dom";
import "./Rent.css";

function Rent() {
  return (
    <div className="rent-page">
      {/* Hero Section */}
      <section className="rent-hero">
        <h1>Properties for rent in Coimbatore</h1>
        <p>
          <span>9K+</span> listings added daily and <span>63K+</span> total verified
        </p>

        {/* Tabs */}
        <div className="tabs">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")}
          >
            Buy
          </NavLink>

          <NavLink 
            to="/rent" 
            className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")}
          >
            Rent
          </NavLink>

          <NavLink 
            to="/commercial" 
            className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")}
          >
            Commercial
          </NavLink>

          <NavLink 
            to="/pg" 
            className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")}
          >
            PG/Co-Living
          </NavLink>

          <NavLink 
            to="/plots" 
            className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")}
          >
            Plots
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <select>
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
          <input
            type="text"
            placeholder="Search for locality, landmark, project, or builder"
          />
          <button className="search-btn">Search</button>
        </div>

        {/* Popular Localities */}
        <div className="localities">
          <p>Popular Localities:</p>
          <div className="tags">
            <span>Sulur</span>
            <span>RS Puram</span>
            <span>Selvapurm South</span>
            <span>Cheran Ma Nagar</span>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="rent-listings">
        <h2>Featured Rental Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src="https://via.placeholder.com/250x150" alt="House" />
            <h3>2BHK Apartment</h3>
            <p>Sulur, Coimbatore</p>
            <p className="price">₹12,000/month</p>
          </div>
          <div className="property-card">
            <img src="https://via.placeholder.com/250x150" alt="House" />
            <h3>3BHK Villa</h3>
            <p>RS Puram, Coimbatore</p>
            <p className="price">₹25,000/month</p>
          </div>
          <div className="property-card">
            <img src="https://via.placeholder.com/250x150" alt="House" />
            <h3>1BHK Studio</h3>
            <p>Cheran Ma Nagar</p>
            <p className="price">₹8,500/month</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rent;
