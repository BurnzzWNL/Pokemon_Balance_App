import React from "react";
import { Link } from "react-router-dom";
import { pokemonImages } from "../utils/pokemonImages";
import { useTheme } from "../context/ThemeContext";
import "./PokemonList.css";

const PokemonList = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`pokemon-list ${darkMode ? "dark" : ""}`}>
      <h1>All Pokémon</h1>
      <div className="pokemon-grid">
        {Object.entries(pokemonImages).map(([name, image]) => (
          <Link key={name} to={`/pokemon/${name}`} className="pokemon-card">
            <img src={image} alt={name} className="pokemon-image" />
            <h3>{name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;