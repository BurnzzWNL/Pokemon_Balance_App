import React, { useState, useEffect } from "react";
import "./PokemonCarousel.css";
import { getPokemonImage } from "../utils/pokemonImages";
import pokemonList from "../data/pokemon_Complete_Details.json";

const PokemonCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const totalSlides = Math.ceil(pokemonList.length / itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentPokemon = () => {
    const start = currentIndex * itemsPerView;
    return pokemonList.slice(start, start + itemsPerView);
  };

  return (
    <div className="pokemon-carousel">
      <h2 className="carousel-title">Pokémon Collection</h2>
      
      <div className="carousel-container">
        <button 
          className="carousel-btn prev" 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
        >
          ‹
        </button>
        
        <div className="carousel-track">
          {getCurrentPokemon().map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <img
                src={getPokemonImage(pokemon.name)}
                alt={pokemon.name}
                className="pokemon-img"
              />
              <h3 className="pokemon-name">{pokemon.name}</h3>
              <p className="pokemon-type">{pokemon.type?.join(", ") || "Unknown"}</p>
              <span className="pokemon-difficulty">{pokemon.difficulty || "Normal"}</span>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-btn next" 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
        >
          ›
        </button>
      </div>
      
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonCarousel;