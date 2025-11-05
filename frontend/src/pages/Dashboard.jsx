import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { getPokemonImage } from "../utils/pokemonImages";
import { useTheme } from "../context/ThemeContext";
import PokemonCarousel from "../components/PokemonCarousel"; // ✅ Added Carousel

const featuredPokemon = [
  "Cinderace", "Garchomp", "Gengar", "Cramorant", "Alolan Ninetales", "Wigglytuff", "Machamp", "Absol", "Slowbro", "Mr. Mime",
  "Venusaur", "Lucario", "Talonflame", "Eldegoss", "Greninja", "Crustle", "Snorlax", "Charizard", "Pikachu", "Zeraora",
  "Gardevoir", "Blissey", "Blastoise", "Mamoswine", "Sylveon", "Greedent", "Decidueye", "Tsareena", "Dragonite", "Trevenant",
  "Aegislash", "Hoopa", "Duraludon", "Azumarill", "Espeon", "Delphox", "Glaceon", "Buzzwole", "Tyranitar", "Mew",
  "Dodrio", "Scizor", "Clefable", "Zoroark", "Sableye", "Urshifu", "Dragapult", "Comfey", "Zacian", "Goodra",
  "Lapras", "Chandelure", "Umbreon", "Leafeon", "Inteleon", "Mewtwo", "Blaziken", "Mimikyu", "Meowscarada", "Metagross",
  "Gyarados", "Miraidon", "Falinks", "Ceruledge", "Ho-oh", "Armarouge", "Darkrai", "Psyduck", "Tinkaton", "Rapidash",
  "Suicune", "Alolan Raichu", "Alcremie", "Latios", "Latias", "Pawmot", "Empoleon"
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll Pokémon hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPokemon.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentPokemon = featuredPokemon[currentIndex];
  const currentImage = getPokemonImage(currentPokemon);

  return (
    <div className={`dashboard fade-in ${darkMode ? "dark" : ""}`}>
      {/* 🔥 HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Unite. Battle. Balance.</h1>
          <p className="hero-subtitle">
            Track every buff, nerf, and ability rework across all Pokémon — stay
            ahead of the meta.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/patch-updates")}
            >
              📜 Explore Patches
            </button>
            <button
              className="hero-btn secondary"
              onClick={() => navigate("/pokemon")}
            >
              🌀 View Pokémon
            </button>
          </div>
        </div>

        <div className="hero-pokemon">
          <img
            src={currentImage}
            alt={currentPokemon}
            className="hero-pokemon-img"
          />
          <h3 className="hero-pokemon-name">{currentPokemon}</h3>
        </div>
      </section>

      {/* 💫 FEATURE HIGHLIGHTS */}
      <section className="feature-section">
        <h2 className="feature-title">Discover What’s Inside</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚔️ Live Balance Tracker</h3>
            <p>Follow buffs, nerfs, and updates the moment they drop.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Tier Insights</h3>
            <p>See which Pokémon are ruling the meta this season.</p>
          </div>

          <div className="feature-card">
            <h3>🧩 Evolution & Abilities</h3>
            <p>Explore full evolution chains and unique ability sets.</p>
          </div>

          <div className="feature-card">
            <h3>🌈 Role Breakdown</h3>
            <p>Attackers, Defenders, Speedsters — understand every role.</p>
          </div>
        </div>
      </section>



      {/* 📖 ABOUT SECTION */}
      <section className="about-section">
        <h2 className="about-title">About Pokémon Balance Tracker</h2>
        <div className="about-content">
          <p>
            Born from the passion of competitive Pokémon UNITE players, this tracker was created to solve a simple problem: 
            staying updated with the ever-changing meta. With frequent balance patches and new Pokémon releases, 
            keeping track of buffs, nerfs, and adjustments became overwhelming.
          </p>
          <p>
            Our mission is to provide the most comprehensive and up-to-date resource for all Pokémon UNITE enthusiasts. 
            From casual players to esports professionals, everyone deserves access to accurate balance information 
            to make informed decisions and improve their gameplay.
          </p>
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">📺 YouTube</a>
              <a href="#" className="social-link">💬 Discord</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Credits</h4>
            <p>Built with ❤️ for the Pokémon UNITE community</p>
            <p>© 2025 Pokémon Balance Tracker</p>
          </div>
          

        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
