import React from "react";
import { Link } from "react-router-dom";
import { getPokemonImage } from "../utils/pokemonImages";
import pokemonData from "../data/pokemon_Complete_Details.json";
import { useTheme } from "../context/ThemeContext";
import "./PokemonList.css";

const PokemonList = () => {
  const { darkMode } = useTheme();
  
  const sortedPokemon = [...pokemonData].sort((a, b) => b.releaseOrder - a.releaseOrder);

  return (
    <div className={`pokemon-list ${darkMode ? "dark" : ""}`}>
      <h1>All Pokémon</h1>
      <div className="pokemon-grid">
        {sortedPokemon.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`} className="pokemon-card">
            <img src={getPokemonImage(pokemon.name)} alt={pokemon.name} className="pokemon-image" />
            <h3>{pokemon.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;