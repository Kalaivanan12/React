import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Router
import "./Plots.css"; // Import CSS file

const Plots = () => {
  const location = useLocation(); // Get current route

  return (
    <div className="plots-container">
      <div className="overlay">
        <h1>Plots for sale in Coimbatore</h1>

        {/* Tabs */}
        <div className="tabs">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            BUY
          </Link>
          <Link
            to="/rent"
            className={location.pathname === "/rent" ? "active" : ""}
          >
            RENT
          </Link>
          <Link
            to="/commercial"
            className={location.pathname === "/commercial" ? "active" : ""}
          >
            COMMERCIAL
          </Link>
          <Link
            to="/pg"
            className={location.pathname === "/pg" ? "active" : ""}
          >
            PG/CO-LIVING
          </Link>
          <Link
            to="/plots"
            className={location.pathname === "/plots" ? "active" : ""}
          >
            PLOTS
          </Link>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <select>
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
          <input
            type="text"
            placeholder="Search for locality, landmark, project, or builder"
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Plots;
