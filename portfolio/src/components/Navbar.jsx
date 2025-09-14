import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1 className="logo">Kalaivanan K</h1>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
}

export default Navbar;
