import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Loader.css";

const Loader = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`loader-container ${darkMode ? "dark" : ""}`}>
      <div className="pokeball">
        <div className="pokeball-center"></div>
      </div>
      <p className="loader-text">Loading Pokémon Data...</p>
    </div>
  );
};

export default Loader;
