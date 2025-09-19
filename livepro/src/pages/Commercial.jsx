import React from "react";
import { NavLink } from "react-router-dom";
import "./Commercial.css";

function Commercial() {
  return (
    <section className="commercial-hero">
      <div className="overlay">
        <h1>Commercial Real Estate in Coimbatore</h1>

        {/* Tabs */}
        <nav className="tabs">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Buy
          </NavLink>
          <NavLink to="/rent" className={({ isActive }) => (isActive ? "active" : "")}>
            Rent
          </NavLink>
          <NavLink to="/commercial" className={({ isActive }) => (isActive ? "active" : "")}>
            Commercial
          </NavLink>
          <NavLink to="/pg" className={({ isActive }) => (isActive ? "active" : "")}>
            PG/Co-Living
          </NavLink>
          <NavLink to="/plots" className={({ isActive }) => (isActive ? "active" : "")}>
            Plots
          </NavLink>
        </nav>

        {/* Search Bar */}
        <div className="search-box">
          <select className="location">
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
          <input type="text" placeholder="Search Locality" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Commercial;
