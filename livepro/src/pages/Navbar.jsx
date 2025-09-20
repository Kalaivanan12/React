import React from "react";
import "./Navbar.css";
import { FaMobileAlt, FaHeart, FaBars } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img
          src="./src/img/navlogo.webp"
          alt="Housing.com"
          className="logo"
        />
      </div>

      {/* Center Menu */}
      <nav className="navbar-center">
        <button className="pay-btn">Pay Rent</button>
        <a href="#download" className="nav-link">
          <FaMobileAlt /> Download App
        </a>
        <a href="#saved" className="nav-link">
          <FaHeart /> Saved
        </a>
        <a href="#packages" className="nav-link">
          <MdOutlineLibraryBooks /> Packages <span className="dropdown">▼</span>
        </a>
        <a href="#post" className="nav-link post-property">
          Post Property <span className="free-badge">FREE</span>
        </a>
      </nav>

      {/* Right Side */}
      <div className="navbar-right">
        <button className="profile-btn">
          <FaBars className="menu-icon" />
          <CgProfile className="profile-icon" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
