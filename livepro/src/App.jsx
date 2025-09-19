import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Rent from "./pages/Rent";
import Commercial from "./pages/Commercial";
import PgColiving from "./pages/PgColiving";
import Plots from "./pages/Plots";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">
            HOUSING<span>.com</span>
          </div>

          {/* Hamburger Button */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {/* Nav Links */}
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/rent" onClick={() => setMenuOpen(false)}>Rent</Link>
            <Link to="/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link>
            <Link to="/pg" onClick={() => setMenuOpen(false)}>PG/Co-Living</Link>
            <Link to="/plots" onClick={() => setMenuOpen(false)}>Plots</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/pg" element={<PgColiving />} />
          <Route path="/plots" element={<Plots />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
