import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./pages/Hero";
import Rent from "./pages/Rent";
import Commercial from "./pages/Commercial";
import PgColiving from "./pages/PgColiving";
import Plots from "./pages/Plots";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">
            HOUSING<span>.com</span>
          </div>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/rent">Rent</Link>
            <Link to="/commercial">Commercial</Link>
            <Link to="/pg">PG/Co-Living</Link>
            <Link to="/plots">Plots</Link>
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
