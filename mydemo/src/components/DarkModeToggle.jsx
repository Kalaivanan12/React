// src/components/DarkModeToggle.jsx
import React, { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>
      <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default DarkModeToggle;
