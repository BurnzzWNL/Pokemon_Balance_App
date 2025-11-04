import React, { useState } from "react";
import { getPokemonImage } from "../utils/pokemonImages";
import pokemonData from "../data/pokemon_Complete_Details.json";
import { useTheme } from "../context/ThemeContext";
import "./TierList.css";

// Tier configuration constants
const TIER_COLORS = {
  SS: "linear-gradient(135deg, #ff6b35, #f7931e)",
  S: "linear-gradient(135deg, #e74c3c, #c0392b)",
  A: "linear-gradient(135deg, #27ae60, #2ecc71)",
  B: "linear-gradient(135deg, #3498db, #2980b9)",
  C: "linear-gradient(135deg, #9b59b6, #8e44ad)"
};

const TIER_POKEMON = {
  SS: ["Mew", "Blaziken", "Blissey", "Darkrai", "Gyarados", "Mewtwo", "Charizard", "Lapras", "Dragonite", "Meowscarada", "Talonflame", "Slowbro", "Sylveon"],
  S: ["Blastoise", "Blaziken", "Venusaur", "Delphox", "Armarouge", "Clefable", "Goodra", "Duraludon", "Garchomp", "Latios", "Gardevoir", "Ho-oh", "Lucario", "Absol", "Pikachu", "Psyduck", "Espeon", "Sylveon", "Leafeon", "Umbreon", "Zoroark", "Gyarados", "Decidueye"],
  A: ["Lapras", "Aegislash", "Machamp", "Talonflame", "Mamoswine", "Crustle", "Inteleon", "Zeraora", "Hoopa", "Gengar", "Greninja", "Scizor", "Gyarados", "Latias", "Espeon", "Dragapult", "Buzzwole", "Snorlax", "Wigglytuff", "Blissey", "Eldegoss", "Comfey", "Mimikyu", "Tyranitar", "Cinderace"],
  B: ["Azumarill", "Dodrio", "Empoleon", "Pikachu", "Rapidash", "Greedent", "Alcremie", "Clefable", "Wigglytuff", "Chandelure", "Tsareena"],
  C: ["Gengar"]
};

const ROLES = ["All", "Attacker", "All-Rounder", "Speedster", "Defender", "Supporter"];

const TierList = () => {
  const { darkMode } = useTheme();
  const [selectedRole, setSelectedRole] = useState("All");
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const tiers = Object.keys(TIER_COLORS).map(tierName => ({
    name: tierName,
    color: TIER_COLORS[tierName],
    pokemon: TIER_POKEMON[tierName]
  }));



  const getRoleFromPokemon = (pokemonName) => {
    const pokemon = pokemonData.find(p => p.name === pokemonName);
    return pokemon?.type?.[0] || "All-Rounder";
  };

  const filteredTiers = tiers.map(tier => ({
    ...tier,
    pokemon: selectedRole === "All" 
      ? tier.pokemon 
      : tier.pokemon.filter(pokemon => getRoleFromPokemon(pokemon) === selectedRole)
  }));

  return (
    <div className={`tier-list ${darkMode ? "dark" : ""}`}>
      <div className="tier-header">
        <div className="filter-section">
          <span className="filter-label">Filter</span>
          {ROLES.map((role) => (
            <button
              key={role}
              className={`role-filter ${selectedRole === role ? "active" : ""}`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      
      <div className="tier-container">
        {filteredTiers.map((tier) => (
          <div key={tier.name} className="tier-row">
            <div className="tier-label" style={{ background: tier.color }}>
              {tier.name}
            </div>
            <div className="tier-pokemon">
              {tier.pokemon.map((pokemonName) => (
                <div 
                  key={pokemonName} 
                  className="pokemon-tier-card"
                  onMouseEnter={(e) => {
                    setHoveredPokemon(pokemonName);
                    setMousePosition({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => setHoveredPokemon(null)}
                  onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
                >
                  <img 
                    src={getPokemonImage(pokemonName)} 
                    alt={pokemonName}
                    className="pokemon-tier-image"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="tier-footer">
        <span className="tier-footer-text">▼ Check out the changes here! ▼</span>
      </div>
      
      {hoveredPokemon && (
        <div 
          className="pokemon-tooltip"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 30
          }}
        >
          {hoveredPokemon}
        </div>
      )}
    </div>
  );
};

export default TierList;