import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Card.css";

const Card = ({ pokemon, change, image }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`card ${darkMode ? "dark" : ""}`}>
      <img
        src={image}
        alt={pokemon}
        className="card-image"
        onError={(e) => (e.target.style.display = "none")}
      />
      <h3 className="card-title">{pokemon}</h3>
      <p className="card-text">{change}</p>
    </div>
  );
};

export default Card;
