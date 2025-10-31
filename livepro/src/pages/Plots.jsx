import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Plots.css";
import "../App.css";

// ===========================
// Plots Component
// ===========================
function Plots() {
  const properties = [
    {
      price: "₹35.41 L - 74.77 L",
      name: "Adhya",
      developer: "Purnaya Developers Private Ltd",
      desc: "1, 2, 3 BHK Apartments · Saravanampatty",
      image: "./src/img/saravanampatty.avif",
      logo: "./src/img/dev1.png",
    },
    {
      price: "₹3.48 Cr - 3.89 Cr",
      name: "Sreevatsa Poorna",
      developer: "Sreevatsa Real Estates Pvt Ltd",
      desc: "3 BHK Villa · Thudiyalur, Coimbatore",
      image: "./src/img/thudiyalur.avif",
      logo: "./src/img/dev2.png",
    },
    {
      price: "₹16.67 L - 77.75 L",
      name: "Echo Valley",
      developer: "Adissia Developers Pvt Ltd",
      desc: "Residential Plots · Pannimadai",
      image: "./src/img/kalapatti.avif",
      logo: "./src/img/dev3.png",
    },
    {
      price: "₹1.15 Cr - 1.4 Cr",
      name: "Sreevatsa Viswa",
      developer: "Sreevatsa Real Estates Pvt Ltd",
      desc: "3 BHK Apartment · Villankurichi",
      image: "./src/img/peelamedu.avif",
      logo: "./src/img/dev2.png",
    },
  ];

  const plots = [
    {
      title: "Corner Plots",
      img: "./src/img/plots/cornerPlots.jpg",
      bg: "#f2e5ff",
    },
    {
      title: "Boundary Wall Plots",
      img: "./src/img/plots/BoundaryWalls.jpg",
      bg: "#fbe1ec",
    },
    {
      title: "Below ₹30Lakhs Plots",
      img: "./src/img/plots/below.jpg",
      bg: "#cff7f3",
    },
    {
      title: "East Facing Plots",
      img: "./src/img/plots/eastFacing.jpg",
      bg: "#fff0d6",
    },
  ];

  return (
    <>
      {/* ===========================
          Hero + Search Tabs Section
      =========================== */}
      <section className="plots-section">
        <div className="plots-overlay">
          <br />
          <h1>Plots for sale in Cuddalore</h1>

          <div className="search-wrap css-nc7111">
            <nav className="css-koo8qs">
              <ul className="navlist">
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" end>
                    BUY
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/rent">
                    RENT
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/commercial">
                    COMMERCIAL
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/pg">
                    PG/CO-LIVING
                  </NavLink>
                </li>
                <span className="custom-underline">
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/plots">
                      PLOTS
                    </NavLink>
                  </li>
                </span>
              </ul>
            </nav>

            {/* Search Box */}
            <div className="search-box">
              <div className="search-section dropdown-sec">
                <select className="search-dropdown">
                  <option>Cuddalore</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              <div className="search-section input-sec">
                <input
                  type="text"
                  placeholder="Search for locality, landmark, project, or builder"
                  className="search-input"
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          Plot Collections Section
      =========================== */}
      <section className="plot-section">
        <div className="plot-header">
          <h2>
            Plot <span>Collections</span>
          </h2>
          <p>Exclusive showcase of categorized plots</p>
        </div>

        <div className="plot-grid">
          {plots.map((plot, index) => (
            <div
              key={index}
              className="plot-card"
            >
              <img src={plot.img} alt={plot.title} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Plots;