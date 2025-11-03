import React from "react";
import "./Navbar.css";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="nav-left">
        <h1 className="nav-logo">Pokémon Balance Dashboard</h1>
      </div>

      <ul className="nav-links">
        <li><a href="/" className="nav-item">Home</a></li>
        <li><a href="/pokemon" className="nav-item">Pokémon</a></li>
        <li><a href="/patch-updates" className="nav-item">Patch Updates</a></li>
        <li><a href="/about" className="nav-item">About</a></li>
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleDarkMode}
        title="Toggle Theme"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
