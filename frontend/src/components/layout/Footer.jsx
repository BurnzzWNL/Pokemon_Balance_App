import React from "react";
import "./Footer.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <p>© 2025 Pokémon Balance Dashboard — Designed by Rajdeep Hazra</p>
    </footer>
  );
};

export default Footer;
