import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Properties to buy in Coimbatore</h1>
          <p>
            <span>9K+</span> listings added daily and <span>63K+</span> total
            verified
          </p>

          {/* Tabs Navigation */}
          <div className="search-wrap css-nc7111">
            <nav className="css-koo8qs">
              <ul className="navlist">
                <li>
                  <span className="custom-underline">
                     <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" end>
                    BUY
                  </NavLink>
                  </span>
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
                  <option>Coimbatore</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              {/* Input + Button in one container */}
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

      {/* New Section with Carousel */}
      <section className="featured-section">
        <h2>Recommendations for you</h2>
        <p>Event special project attractions</p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <div className="property-card">
                <img src={property.image} alt={property.name} className="property-img" />
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p>{property.desc}</p>
                  <p className="price">{property.price}</p>
                </div>
                <div className="property-footer">
                  <img src={property.logo} alt={property.developer} className="dev-logo" />
                  <button className="contact-btn">Contact</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
