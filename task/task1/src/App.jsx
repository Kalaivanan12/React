import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import Home from "./Home";
import "./App.css";

export default function App() {
  const defaultTheme = {
    bgImage: "https://via.placeholder.com/800x400?text=Default",
    color: "#333",
    fontSize: "20px"
  };

  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = (bgImage, color, fontSize) => {
    setTheme({ bgImage, color, fontSize });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app-container">
        <Home />

        <div className="button-group">
          <button
            onClick={() =>
              changeTheme(
                "https://via.placeholder.com/800x400?text=Theme+1",
                "purple",
                "24px"
              )
            }
          >
            Theme 1
          </button>

          <button
            onClick={() =>
              changeTheme(
                "https://via.placeholder.com/800x400?text=Theme+2",
                "orange",
                "28px"
              )
            }
          >
            Theme 2
          </button>

          <button
            onClick={() =>
              changeTheme(
                "https://via.placeholder.com/800x400?text=Theme+3",
                "lightgreen",
                "32px"
              )
            }
          >
            Theme 3
          </button>

          {/* New Default Reset Button */}
          <button
            onClick={() => setTheme(defaultTheme)}
            style={{ background: "#007bff" }}
          >
            Reset Default
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
