import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard({ onClose }) {
  // State to track which activity card is active
  const [activeCard, setActiveCard] = useState("seen"); // default active

  return (
    <div className="dashboard-backdrop" onClick={onClose}>
      <div className="dashboard" onClick={(e) => e.stopPropagation()}>
        
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-info">
            <img
              src="./src/img/profile.webp"
              alt="User"
              className="profile-img"
            />
            <div>
              <h3>Hello 👋</h3>
              <ul>
                <li>✅ Easy Contact with sellers</li>
                <li>✅ Personalized experience</li>
              </ul>
            </div>
          </div>
          <button className="login-btn">Login</button>
        </div>

        {/* Activity Section */}
        <h4 className="activity-title">My Activity</h4>
        <div className="activity-cards">
          {[
            { id: "contacted", label: "Contacted Properties", count: "00" },
            { id: "seen", label: "Seen Properties", count: "00" },
            { id: "saved", label: "Saved Properties", count: "00" },
            { id: "recent", label: "Recent Searches", count: "01" },
          ].map((card) => (
            <div
              key={card.id}
              className={`activity-card ${activeCard === card.id ? "active" : ""}`}
              onClick={() => setActiveCard(card.id)}
            >
              <p>{card.label}</p>
              <span>{card.count}</span>
            </div>
          ))}
        </div>

        {/* Search Section */}
        <div className="search-box-lo">
          <img
            src="./src/img/fallback.svg"
            alt="illustration"
            className="illustration"
          />
          <button className="search-btn-lo">Start new search</button>
        </div>

        {/* Ad Box */}
        <div className="ad-box">
          <div className="ad-content">
            <img
              src="./src/img/postProperty.svg"
              alt="Sell/Rent"
              className="ad-img"
            />
            <div>
              <p>Looking to sell / rent your property?</p>
              <button className="post-property-btn">Post a property</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
