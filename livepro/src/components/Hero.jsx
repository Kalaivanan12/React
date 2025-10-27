import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";
import "../App.css";

function Hero() {
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

  // ✅ define localities
  const localities = [
    "Manjakuppam",
    "Koothapakkam",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"><br /><br /><br />
          <h1>Properties to buy in Cuddalore</h1>
          <p>
            <span>5K+</span> listings added daily and <span>63K+</span> total
            verified
          </p>

          {/* Tabs Navigation */}
          <div className="search-wrap css-nc7111">
            <nav className="css-koo8qs">
              <ul className="navlist">
                <span className="custom-underline">
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" end>
                      BUY
                    </NavLink>
                  </li>
                </span>
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
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/plots">
                    PLOTS
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Search Box */}
            <div className="search-box">
              {/* Dropdown */}
              <div className="search-section dropdown-sec">
                <select className="search-dropdown">
                  <option>Cuddalore</option>
                  <option>Coimbatore</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              {/* Input + Button */}
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

          {/*Popular Localities Section */}
          <div className="popular-localities">
            <h3 className="heading">Popular Localities</h3>
            <div className="localities-scroll">
              {localities.map((loc, index) => (<button key={index} className="locality-btn">
                {loc} <ChevronRight size={16} />
              </button>))}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="housing-edge">
        <div className="container">
          <div className="header">
            <div>
              <h2>Housing Edge</h2>
              <p>Explore property related services</p>
            </div>
            <a href="#" className="btn">
              Explore Services →
            </a>
          </div>

          <div className="cards">
            <div className="card">
              <div className="icon">
                <img
                  src="./src/logo/payRent.svg"
                  alt="Credit"
                />
              </div>
              <h3>Pay on Credit</h3>
              <p>Pay your rent using Credit Card</p>
            </div>

            <div className="card">
              <div className="icon">
                <img
                  src="./src/logo/housingPremium.svg"
                  alt="Premium"
                />
              </div>
              <h3>Housing Premium</h3>
              <p>Instant access to zero brokerage properties</p>
            </div>

            <div className="card">
              <div className="icon">
                <img
                  src="./src/logo/homeLoans.svg"
                  alt="Home Loans"
                />
              </div>
              <h3>Home Loans</h3>
              <p>Lowest Interest rate offers</p>
            </div>

            <div className="card">
              <div className="icon">
                <img
                  src="./src/logo/housingProtect.svg"
                  alt="Protect"
                />
              </div>
              <h3>Housing Protect</h3>
              <p>Protection against cyber frauds</p>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div className="research-container">
          <section className="research-section">
            <h2>Research and Insights</h2>
            <p>Explore useful real estate insights</p>
            <div className="research-cards">
              <div className="research-card">
                <img
                  src="./src/logo/priceTrends.svg"
                  alt="Price Trends"
                />
                <h3>Price Trends ›</h3>
                <p>Find property rates & price trends of top locations</p>
              </div>

              <div className="research-card">
                <img
                  src="./src/logo/cityInsights.svg"
                  alt="City Insights"
                />
                <h3>City Insights ›</h3>
                <p>Get to know about top cities before you invest</p>
              </div>

              <div className="research-card">
                <img
                  src="./src/logo/housingResearch.svg"
                  alt="Housing Research"
                />
                <h3>Housing Research ›</h3>
                <p>Find reports on Indian residential market</p>
              </div>
            </div>
          </section>
          {/* sell-property section */}
          <section className="sell-property-section">
            <h2 className="sell-heading">Have a property to sell?</h2>

            <div className="sell-banner-extended">
              <img
                src="/src/img/background.png"
                alt="Sell property banner"
                className="sell-banner-bg"
              />

              <div className="sell-banner-content">
                <p>List your property & connect with clients faster!</p>
                <button className="sell-btn">Sell your property</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Hero;
