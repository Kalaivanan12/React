import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./PgColiving.css";

function PgColiving() {
  const location = useLocation();

  return (
    <div className="pg-page">
      {/* Hero Section */}
      <section className="pg-hero">
        <h1>PG/Co-Living in Coimbatore</h1>

        {/* Tabs */}
        <div className="tabs">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Buy</Link>
          <Link to="/rent" className={location.pathname === "/rent" ? "active" : ""}>Rent</Link>
          <Link to="/commercial" className={location.pathname === "/commercial" ? "active" : ""}>Commercial</Link>
          <Link to="/pg" className={location.pathname === "/pg" ? "active" : ""}>PG/Co-Living</Link>
          <Link to="/plots" className={location.pathname === "/plots" ? "active" : ""}>Plots</Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <select>
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
          <input type="text" placeholder="Search for locality, landmark" />
          <button className="search-btn">Search</button>
        </div>

        {/* Promo Section */}
        <div className="promo">
          <span className="badge">NEW</span>
          <h3>Unlimited PG’s with Premium</h3>
          <p>Upgrade to Premium & access unlimited PG’s</p>
          <button>Explore Now!</button>
        </div>
      </section>
    </div>
  );
}

export default PgColiving;
