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
            <img src="src/logo/spinnylogo1.png" alt="Spinny Logo" />
          </div>

          {/* Location dropdown */}
          <select className="location">
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
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
              <li className="dropdown">
                Buy Car ▾
                <ul className="dropdown-menu">
                  <li>By Budget</li>
                  <li>By Brand</li>
                  <li>Certified Cars</li>
                  <li>New Arrivals</li>
                </ul>
              </li>
              <li className="dropdown">
                Sell Car ▾
                <ul className="dropdown-menu">
                  <li>Instant Car Valuation</li>
                  <li>Book Inspection</li>
                  <li>Sell at Best Price</li>
                </ul>
              </li>
              <li className="dropdown">
                More ▾
                <ul className="dropdown-menu">
                  <li>EMI Calculator</li>
                  <li>Car Loan</li>
                  <li>Insurance</li>
                  <li>Help Center</li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="account">
            <span>
              <FaHeart /> Shortlisted
            </span>
            <span>
              <FaUser /> Account ▾
            </span>
            <span className="call">
              <FaPhoneAlt /> 727-727-7275
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
