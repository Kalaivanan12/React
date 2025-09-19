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
            <span>9K+</span> listings added daily and <span>63K+</span> total verified
          </p>

          {/* Tabs */}
          <nav className="tabs">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Buy
            </NavLink>
            <NavLink to="/rent" className={({ isActive }) => (isActive ? "active" : "")}>
              Rent
            </NavLink>
            <NavLink to="/commercial" className={({ isActive }) => (isActive ? "active" : "")}>
              Commercial
            </NavLink>
            <NavLink to="/pg" className={({ isActive }) => (isActive ? "active" : "")}>
              PG/Co-Living
            </NavLink>
            <NavLink to="/plots" className={({ isActive }) => (isActive ? "active" : "")}>
              Plots
            </NavLink>
          </nav>

          {/* Search Bar */}
          <div className="search-bar">
            <div className="location-select">
              <select>
                <option>Coimbatore</option>
                <option>Chennai</option>
                <option>Bangalore</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search for locality, landmark, project, or builder"
            />
            <button className="search-btn">Search</button>
          </div>

          {/* Popular Localities */}
          <div className="localities">
            <p>Popular Localities:</p>
            <div className="tags">
              <span>Saravanampatty</span>
              <span>Vadavalli</span>
              <span>Kovai Pudur</span>
              <span>Kalapatti</span>
              <span>Karumathampatti</span>
            </div>
          </div>

          {/* Promo Section */}
          <div className="promo">
            <img src="./src/img/megahome.webp" alt="Premium" />
            <p>10th Sep - 15th Oct 2025</p>
            <button className="promo-btn">Explore Now!</button>
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
