import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";  
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
      <Navbar/>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/pg" element={<PgColiving />} />
          <Route path="/plots" element={<Plots />} />
        </Routes>
    </Router>
  );
}

export default App;
