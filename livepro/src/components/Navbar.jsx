import React from "react";
import { FaHeart, FaUser, FaPhoneAlt, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <header className="navbar">
        {/* Left: Logo */}
        <div className="navbar-left">
          <div className="logo">
            <img src="src/logo/spinnylogo.png" alt="Spinny Logo" />
          </div>

          {/* Location dropdown */}
          <select className="location">
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>

          {/* Search bar */}
          <div className="search-box">
            <input type="text" placeholder="Search by make" />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right: Links */}
        <div className="navbar-right">
          <nav>
            <ul className="nav-links">
              <li>Buy Car ▾</li>
              <li>Sell Car ▾</li>
              <li>More ▾</li>
            </ul>
          </nav>
          <div className="account">
            <span><FaHeart /> Shortlisted</span>
            <span><FaUser /> Account ▾</span>
            <span className="call"><FaPhoneAlt /> 727-727-7275</span>
          </div>
        </div>
      </header>

      {/* Second row: Filters */}
      <div className="filter-bar">
        <ul>
          <li>Price Range ▾</li>
          <li>Make and Model ▾</li>
          <li>Year ▾</li>
          <li>Fuel ▾</li>
          <li>KM Driven ▾</li>
          <li>Body Type ▾</li>
          <li>Transmission ▾</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
