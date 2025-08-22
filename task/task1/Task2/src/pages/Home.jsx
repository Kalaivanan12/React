import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* 🔥 Futuristic Banner */}
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to <span>CarVilla</span></h1>
          <p>Drive the Future 🚗✨</p>
          <Link to="/cars" className="btn-banner">Explore Cars</Link>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="featured-section">
        <h2>🔥 Featured Cars</h2>
        <div className="featured-cards">
          <div className="featured-card">
            <img src="./src/img/teslaa.jpg" alt="Tesla" />
            <h3>Tesla Model S</h3>
            <p>Price: $85,000</p>
            <Link to="/cars" className="btn-link">View Cars</Link>
          </div>
          <div className="featured-card">
            <img src="./src/img/bmw.jpg" alt="BMW" />
            <h3>BMW M4</h3>
            <p>Price: $72,000</p>
            <Link to="/cars" className="btn-link">View Cars</Link>
          </div>
          <div className="featured-card">
            <img src="./src/img/audi-a6.jpg" alt="Audi" />
            <h3>Audi A6</h3>
            <p>Price: $60,000</p>
            <Link to="/cars" className="btn-link">View Cars</Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <h2>📊 Quick Stats</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Cars Available</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>Customers</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>New Cars This Month</p>
          </div>
        </div>
      </section>

      {/* Featured Customers */}
      <section className="featured-section">
        <h2>👥 Featured Customers</h2>
        <div className="featured-cards">
          <div className="featured-card">
            <h3>John Doe</h3>
            <p>Email: john@example.com</p>
          </div>
          <div className="featured-card">
            <h3>Jane Smith</h3>
            <p>Email: jane@example.com</p>
          </div>
          <div className="featured-card">
            <h3>Mike Johnson</h3>
            <p>Email: mike@example.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
