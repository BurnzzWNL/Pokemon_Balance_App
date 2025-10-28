import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard fade-in">
      <div className="dashboard-header">
        <h1>Pokémon Balance Dashboard</h1>
        <p className="dashboard-subtitle">
          Track buffs, nerfs, and ability adjustments for every Pokémon update.
        </p>
      </div>

      <div className="dashboard-cards">
        {/* Buffed Pokémon */}
        <div
          className="dashboard-card fade-in"
          onClick={() => navigate("/pokemon/buffed")}
        >
          <h3>🟩 Buffed Pokémon</h3>
          <p>View all recently enhanced Pokémon stats and ability updates.</p>
        </div>

        {/* Nerfed Pokémon */}
        <div
          className="dashboard-card fade-in"
          onClick={() => navigate("/pokemon/nerfed")}
        >
          <h3>🟥 Nerfed Pokémon</h3>
          <p>See which Pokémon received damage or ability reductions.</p>
        </div>

        {/* Adjusted Pokémon */}
        <div
          className="dashboard-card fade-in"
          onClick={() => navigate("/pokemon/adjusted")}
        >
          <h3>🟨 Adjusted Pokémon</h3>
          <p>Pokémon with balanced or reworked skill behaviors.</p>
        </div>

        {/* All Pokémon */}
        <div
          className="dashboard-card fade-in"
          onClick={() => navigate("/pokemon")}
        >
          <h3>🌀 All Pokémon</h3>
          <p>Browse all available Pokémon with their base stats and images.</p>
        </div>

        {/* Patch Notes */}
        <div
          className="dashboard-card fade-in"
          onClick={() => navigate("/patch-updates")}
        >
          <h3>📜 Patch Updates</h3>
          <p>Read detailed balance changes and seasonal patch updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
