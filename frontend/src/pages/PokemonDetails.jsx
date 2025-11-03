import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonImage } from "../utils/pokemonImages";
import pokemonData from "../data/pokemon_Complete_Details.json";
import { getDefaultRatings } from "../data/pokemonRatings";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const pokemon = pokemonData.find(p => p.name === name);
  
  useEffect(() => {
    if (pokemon) {
      // Use default data structure
      const defaultData = {
        name: pokemon.name,
        description: `${pokemon.name} brings unique abilities and strategic gameplay to the battlefield of Aeos Island.`,
        ratings: getDefaultRatings(pokemon.name),
        evolution: {
          stage: "Basic",
          levels: [1],
          evolutionImages: [],
          evolutionNames: [pokemon.name]
        },
        abilities: ["Ability 1", "Ability 2", "Ability 3"],
        intro: `${pokemon.name} is a ${pokemon.type[0]}-type Pokémon in Pokémon UNITE.`
      };
      setPokemonDetails(defaultData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [pokemon]);
  
  if (!pokemon) {
    return (
      <div className="pokemon-details">
        <Link to="/pokemon" className="back-link">← Back to Pokemon List</Link>
        <div className="pokemon-not-found">
          <h1>Pokemon not found</h1>
          <p>The Pokemon "{name}" could not be found.</p>
        </div>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="pokemon-details-container">
        <div className="loading">Loading Pokemon data...</div>
      </div>
    );
  }
  
  const imageSrc = getPokemonImage(pokemon.name);
  const ratings = pokemonDetails.ratings;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="pokemon-details-container">
      <Link to="/pokemon" className="back-link">← Back to Pokemon List</Link>
      
      <div className="pokemon-details-main">
        <div className="pokemon-info-left">
          <div className="pokemon-name-badge">
            <span className="pokemon-emoji">😊</span>
            <h1 className="pokemon-name-title">{pokemon.name.toUpperCase()}</h1>
          </div>
          
          <div className="pokemon-description-box">
            <p className="pokemon-description">{pokemonDetails.description}</p>
          </div>
        </div>

        <div className="pokemon-image-center">
          <img src={imageSrc} alt={pokemon.name} className="pokemon-main-image" />
          <div className="pokemon-platform"></div>
        </div>

        <div className="pokemon-stats-right">
          <div className="pokemon-badges-top">
            <span className={`type-badge ${pokemon.type[0].toLowerCase()}`}>
              {pokemon.type[0]}
            </span>
            <span className="range-badge">
              {pokemon.type[0] === "Attacker" ? "Ranged" : "Melee"}
            </span>
          </div>

          <div className={`difficulty-badge-large ${pokemon.difficulty.toLowerCase()}`}>
            Difficulty: {pokemon.difficulty}
          </div>

          <div className="ratings-container">
            <div className="rating-item">
              <span className="rating-label">OFFENSE</span>
              <div className="stars">{renderStars(ratings.offense)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">ENDURANCE</span>
              <div className="stars">{renderStars(ratings.endurance)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">MOBILITY</span>
              <div className="stars">{renderStars(ratings.mobility)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">SCORING</span>
              <div className="stars">{renderStars(ratings.scoring)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">SUPPORT</span>
              <div className="stars">{renderStars(ratings.support)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;