import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaMobileAlt, FaHeart, FaBars } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Dashboard from "./Dashboard";

function Navbar() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-left">
        <img src="./src/img/navlogo.webp" alt="Housing.com" className="logo" />
      </div>

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

      <div className="navbar-right">
        <button
          className="profile-btn"
          onClick={() => setIsDashboardOpen(!isDashboardOpen)}
        >
          <FaBars className="menu-icon" />
          <img src="./src/img/profile.webp" alt="" width={20} height={20} />
        </button>

        {isDashboardOpen && (
          <Dashboard onClose={() => setIsDashboardOpen(false)} />
        )}
      </div>
    </header>
  );
}

export default Navbar;
