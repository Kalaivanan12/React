import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

function Hero() {
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

      {/* 👇 New Section with Carousel */}
      <section className="featured-section">
        <h2>Recommendations for you</h2>
        <p>Event special project attractions</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="property-card">
              <img src="./src/img/saravanampatty.avif" alt="Property 1" />
              <h3>Luxury Villa in Saravanampatty</h3>
              <p>₹85 Lakhs · 3 BHK</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="property-card">
              <img src="./src/img/vadavalli.avif" alt="Property 2" />
              <h3>Modern Apartment in Vadavalli</h3>
              <p>₹45 Lakhs · 2 BHK</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="property-card">
              <img src="./src/img/kalapatti.avif" alt="Property 3" />
              <h3>Plots for Sale in Kalapatti</h3>
              <p>₹12 Lakhs · 1200 sq.ft</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="property-card">
              <img src="./src/img/thudiyalur.avif" alt="Property 3" />
              <h3>Plots for Sale in Thudiyalur</h3>
              <p>₹12 Lakhs · 1200 sq.ft</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="property-card">
              <img src="./src/img/peelamedu.avif" alt="Property 3" />
              <h3>Plots for Sale in Peelamedu</h3>
              <p>₹12 Lakhs · 1200 sq.ft</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
