import React, { useState } from "react";
import "./PatchUpdates.css";
import TableSection from "../components/TableSection";
import { patch_1_20_3_10 } from "../data/patches/patch_1.20.3.10.js";
import { patch_1_20_2_7 } from "../data/patches/patch_1.20.2.7.js";
import { patch_1_20_1_5 } from "../data/patches/patch_1.20.1.5.js";
import { patch_1_20_1_3 } from "../data/patches/patch_1.20.1.3.js";
import { patch_1_20_1_2 } from "../data/patches/patch_1.20.1.2.js";

const patches = [
  patch_1_20_3_10,
  patch_1_20_2_7,
  patch_1_20_1_5,
  patch_1_20_1_3,
  patch_1_20_1_2
].sort((a, b) => new Date(b.date) - new Date(a.date));

const PatchUpdates = () => {
  const [selectedPatch, setSelectedPatch] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const currentPatch = patches.find((p) => p.current) || patches[0];

  return (
    <div className="patch-updates-container">
      {/* 🔹 Banner for current patch */}
      <div className="current-patch-banner">
        <h1>Current Version: Patch {currentPatch.version}</h1>
        <p>{currentPatch.title}</p>
        <span className="current-date">({currentPatch.date}) - Latest</span>
      </div>

      {/* 🔹 Patch list for navigation */}
      <div className="patch-list">
        <h2>Patch History</h2>
        <div className="patch-buttons">
          {patches.map((patch, index) => (
            <button
              key={index}
              className={`patch-button ${
                selectedPatch?.version === patch.version ? "active" : ""
              } ${patch.current ? "current" : ""}`}
              onClick={() => setSelectedPatch(patch)}
            >
              <div className="patch-version">Patch {patch.version}</div>
              <div className="patch-title">{patch.title}</div>
              <div className="patch-date">({patch.date})</div>
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Selected patch details */}
      {selectedPatch && (
        <div className="patch-details">
          <h3>
            Patch {selectedPatch.version} - {selectedPatch.title}
          </h3>

          {/* General updates */}
          {selectedPatch.generalUpdates && (
            <div className="general-updates-section">
              <h4>📋 General Updates</h4>
              <ul className="general-updates-list">
                {selectedPatch.generalUpdates.map((update, idx) => (
                  <li key={idx}>{update}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Pokémon updates */}
          <div className="pokemon-updates-section">
            <h4>⚔️ Pokémon Balance Changes</h4>

            {/* Search bar */}
            <div className="global-search">
              <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Buffed Pokémon */}
            <TableSection
              title="🟩 Buffed Pokémon"
              color="#22c55e"
              list={selectedPatch.data.buffed.filter((item) =>
                item.pokemon.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />

            {/* Nerfed Pokémon */}
            <TableSection
              title="🟥 Nerfed Pokémon"
              color="#ef4444"
              list={selectedPatch.data.nerfed.filter((item) =>
                item.pokemon.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />

            {/* Adjusted Pokémon */}
            <TableSection
              title="🟨 Adjusted Pokémon"
              color="#facc15"
              list={selectedPatch.data.adjusted.filter((item) =>
                item.pokemon.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatchUpdates;
