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
          {/* <div className="radio-box">
            <label>
              <input type="radio" name="type" defaultChecked /> Buy
            </label>
            <label>
              <input type="radio" name="type" /> Lease
            </label>
          </div> */}
          <button className="search-btn">Search</button>
        </div>

        {/* Promo Section */}
        <div className="promo-banner">
          <span className="tag">NEW</span>
          <div>
            <h3>Properties with Great Returns</h3>
            <p>Looking for properties with high ROI? Explore now!</p>
          </div>
          <span className="arrow">➜</span>
        </div>
      </div>
    </section>
  );
}

export default Commercial;
