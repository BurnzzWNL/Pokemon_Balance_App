import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const { name } = useParams();

  // Mock Pokémon info (you’ll connect this to backend later)
  const pokemonInfo = {
    description: "This Pokémon has received recent balance changes.",
    stats: {
      Attack: 80,
      Defense: 70,
      Speed: 90,
    },
  };

  // Image path from assets folder
  const imagePath = `/src/assets/images/pokemon/${name}.png`;

  return (
    <div className="pokemon-details fade-in">
      <Navbar />

      <main className="pokemon-main">
        <Link to="/" className="back-link">
          ← Back to Dashboard
        </Link>

        <div className="pokemon-info-card">
          <img
            src={imagePath}
            alt={name}
            className="pokemon-image"
            onError={(e) => (e.target.style.display = "none")}
          />

          <h1 className="pokemon-name">{name}</h1>
          <p className="pokemon-description">{pokemonInfo.description}</p>

          <div className="pokemon-stats">
            {Object.entries(pokemonInfo.stats).map(([key, value]) => (
              <div key={key} className="stat-box">
                <h3>{key}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PokemonDetails;
