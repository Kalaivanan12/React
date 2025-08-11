import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./Home.css";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: theme.bgImage,
        color: theme.color,
        fontSize: theme.fontSize
      }}
    >
      <h1>Welcome to Theme </h1>
      <p>Theme Changer.</p>
    </div>
  );
}
