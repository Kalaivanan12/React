import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Commercial.css";
import "../App.css";
function Commercial() {
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
  return (
    <>
      {/* Commercial Section */}
      <section className="commercial-section">
        <div className="commercial-overlay"><br /><br />
          <h1>Commercial Real Estate in Cuddalore</h1>
          {/* Tabs Navigation */}
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
                <span className="custom-underline">
                  <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/commercial">
                      COMMERCIAL
                    </NavLink>
                  </li>
                </span>
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
            <div className="com-search-box">
              {/* Dropdown */}
              <div className="search-section com-dropdown-sec">
                <select className="com-search-dropdown">
                  <option>Cuddalore</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              {/* Input + Button */}
              <div className="search-section com-input-sec">
                <input
                  type="text"
                  placeholder="Search for locality"
                  className="com-search-input"
                />
                <div>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="propertyType" value="buy" defaultChecked />
                      <span>Buy</span>
                    </label>
                    <label>
                      <input type="radio" name="propertyType" value="rent" />
                      <span>Lease</span>
                    </label>
                  </div>
                </div>
                <button className="com-search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-properties">
  {/* For Sale Section */}
  <div className="property-section">
    <h2 className="property-heading">
      Recently Added Properties <strong>for Sale</strong>
    </h2>

    <div className="property-cards">
      <div className="property-card">
        <img src="./src/img/property-fallback.webp" alt="Commercial Plot" />
        <div className="property-details">
          <h3>Commercial Plot</h3>
          <p>by Dinesh</p>
          <p>640 sq.ft | 20% p.a. <br />Cuddalore, Cuddalore</p>
          <h4>₹8.5 L</h4>
        </div>
      </div>

      <div className="property-card">
        <img src="./src/img/property-fallback.webp" alt="Shop" />
        <div className="property-details">
          <h3>Shop</h3>
          <p>by Ashok Kumar Vasanthi</p>
          <p>240 sq.ft | 2.4% p.a. <br />Vadalur R.F., Cuddalore</p>
          <h4>₹50.0 L</h4>
        </div>
      </div>

      <div className="property-card">
        <img src="./src/img/property-fallback.webp" alt="Commercial Plot" />
        <div className="property-details">
          <h3>Commercial Plot</h3>
          <p>by Devadas S</p>
          <p>1600 sq.ft | 18% p.a. <br />Tottappattu, Cuddalore</p>
          <h4>₹24.0 L</h4>
        </div>
      </div>
    </div>
  </div>

  {/* For Rent Section */}
  <div className="property-section">
    <h2 className="property-heading">
      Recently Added Properties <strong>for Rent</strong>
    </h2>

    <div className="property-cards">
      <div className="property-card">
        <img src="./src/img/property-fallback.webp" alt="Shop" />
        <div className="property-details">
          <h3>Shop</h3>
          <p>by Tharani</p>
          <p>230 sq.ft <br />Cuddalore, Cuddalore</p>
          <h4>₹10,000</h4>
        </div>
      </div>

      <div className="property-card">
        <img src="./src/img/property-fallback.webp" alt="Office Space" />
        <div className="property-details">
          <h3>Ready to use Office Space</h3>
          <p>by Rajag</p>
          <p>1000 sq.ft <br />Chidambaram, Cuddalore</p>
          <h4>₹60,000</h4>
        </div>
      </div>

      <div className="property-card">
        <img src="./src/img/property-fallback.webp" alt="Office Space" />
        <div className="property-details">
          <h3>Ready to use Office Space</h3>
          <p>by Veerappan</p>
          <p>3200 sq.ft <br />Virudhachalam, Cuddalore</p>
          <h4>₹2 Lacs</h4>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Commercial;
