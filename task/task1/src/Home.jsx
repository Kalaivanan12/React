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
      <h1>Welcome to My App</h1>
      <p>This is using useContext for theme management.</p>
    </div>
  );
}
