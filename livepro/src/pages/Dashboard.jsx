import React, { useState } from "react";
import "./Dashboard.css";

// Import React Icons
import {
  FaGem,                // Diamond
  FaCreditCard,         // Transactions
  FaStar,               // Reviews
  FaHandPointer,        // Quick Links
  FaBox,                // Packages
  FaHome,               // Housing Edge
  FaHandsHelping,       // Services
  FaSearch,             // Top Search
  FaBell,               // Alerts
  FaLightbulb,          // Advice
  FaExclamationTriangle // Fraud Report
} from "react-icons/fa";

// =============================
// Menu Item Component
// =============================
const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-item">
      <div
        className={`menu-header ${item.submenu ? "has-submenu" : ""}`}
        onClick={() => item.submenu && setOpen(!open)}
      >
        <span className="icon">{item.icon}</span>
        <span className="label">{item.label}</span>

        {/* Tag for NEW */}
        {item.tag && <span className="tag">{item.tag}</span>}

        {/* Dropdown arrow */}
        {item.submenu && (
          <span className={`arrow ${open ? "open" : ""}`}>▼</span>
        )}
      </div>

      {/* Submenu */}
      {item.submenu && open && (
        <ul className="submenu">
          {item.submenu.map((sub, i) => (
            <li key={i}>{sub}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// =============================
// Dashboard Component
// =============================
function Dashboard({ onClose }) {
  const [activeCard, setActiveCard] = useState("seen"); // Default active card

  // =============================
  // Side Menu Items
  // =============================
  const menuItems = [
    { label: "Zero Brokerage Properties", icon: <FaGem /> },
    { label: "My Transactions", icon: <FaCreditCard /> },
    { label: "My Reviews", icon: <FaStar />, tag: "NEW" },
    {
      label: "Quick Links",
      icon: <FaHandPointer />,
      submenu: ["Profile Settings", "Saved Searches", "Notifications"],
    },
    {
      label: "Residential Packages",
      icon: <FaBox />,
      submenu: ["Buy Package", "Renew Package"],
    },
    {
      label: "Housing Edge",
      icon: <FaHome />,
      submenu: ["Home Loan", "Legal Assistance"],
    },
    {
      label: "Services",
      icon: <FaHandsHelping />,
      submenu: ["Property Valuation", "Consultation"],
    },
    {
      label: "Top Search",
      icon: <FaSearch />,
      submenu: ["Trending Areas", "Popular Cities"],
    },
    { label: "Unsubscribe Alerts", icon: <FaBell /> },
    { label: "Housing Advice", icon: <FaLightbulb /> },
    { label: "Report a Fraud", icon: <FaExclamationTriangle /> },
  ];

  // =============================
  // Render
  // =============================
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
            { id: "recent", label: "Recent Searches", count: "00" },
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

        {/* Side Menu Section */}
        <div className="side-menu">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
