import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1>Properties to buy in Coimbatore</h1>
        <p>
          <span>9K+</span> listings added daily and <span>63K+</span> total verified
        </p>

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
        <div className="search-bar">
          <div className="location-select">
            <select>
              <option>Coimbatore</option>
              <option>Chennai</option>
              <option>Bangalore</option>
            </select>
          </div>
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
            <span>Saravanampatty</span>
            <span>Vadavalli</span>
            <span>Kovai Pudur</span>
            <span>Kalapatti</span>
            <span>Karumathampatti</span>
          </div>
        </div>

        {/* Promo Section */}
        <div className="promo">
          <h3>Mega Home Utsav</h3>
          <p>10th Sep - 15th Oct 2025</p>
          <button className="promo-btn">Explore Now!</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
