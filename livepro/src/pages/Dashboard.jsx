import React, { useState } from "react";
import "./Dashboard.css";
import {
  FaGem,
  FaCreditCard,
  FaStar,
  FaHandPointer,
  FaBox,
  FaHome,
  FaHandsHelping,
  FaSearch,
  FaBell,
  FaLightbulb,
  FaExclamationTriangle
} from "react-icons/fa";

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
        {item.tag && <span className="tag">{item.tag}</span>}
        {item.submenu && <span className={`arrow ${open ? "open" : ""}`}>▼</span>}
      </div>
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
// Login Modal Component
// =============================
const LoginModal = ({ onClose }) => {
  return (
    <div className="login-modal-backdrop" onClick={onClose}>
      <div className="login-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>✕</button>

        <div className="login-modal">
          <img src="./src/img/home.png" alt="Housing.com" className="modal-logo" />
          <h3>Your Trusted Real Estate Partner</h3>

          <label className="input-label">Enter Phone Number</label>
          <div className="input-group">
            <select className="country-code-select" defaultValue="+91">
              <option value="+91">+91 🇮🇳</option>
              <option value="+1">+1 🇺🇸</option>
              <option value="+44">+44 🇬🇧</option>
              <option value="+61">+61 🇦🇺</option>
              <option value="+971">+971 🇦🇪</option>
            </select>
            <input type="text" placeholder="Enter your number" />
          </div>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

// =============================
// Dashboard Component
// =============================
function Dashboard({ onClose }) {
  const [activeCard, setActiveCard] = useState("seen");
  const [showLogin, setShowLogin] = useState(false);

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

  return (
    <>
      <div className="dashboard-backdrop" onClick={onClose}>
        <div className="dashboard" onClick={(e) => e.stopPropagation()}>
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-info">
              <img src="./src/img/profile.webp" alt="User" className="profile-img" />
              <div>
                <h3>Hello 👋</h3>
                <ul>
                  <li>✅ Easy Contact with sellers</li>
                  <li>✅ Personalized experience</li>
                </ul>
              </div>
            </div>
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
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
            <img src="./src/img/fallback.svg" alt="illustration" className="illustration" />
            <button className="search-btn-lo">Start new search</button>
          </div>

          {/* Ad Box */}
          <div className="ad-box">
            <div className="ad-content">
              <img src="./src/img/postProperty.svg" alt="Sell/Rent" className="ad-img" />
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

      {/* Show Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Dashboard;
