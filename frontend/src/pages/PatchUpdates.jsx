import React from "react";
import "./PatchUpdates.css";
import TableSection from "../components/TableSection";

const PatchUpdates = () => {
  const patchData = {
    buffed: [
      { pokemon: "Blaziken", change: "Healing buffed 7→10%, under 50% HP 10→15%" },
      { pokemon: "Darkrai", change: "Cooldown reduction increased 10%→20%" },
      { pokemon: "Gengar", change: "Levitate speed 10%→20%, Dream Eater healing up" },
    ],
    nerfed: [
      { pokemon: "Empoleon", change: "Lifesteal 25%→15%, Wild Bonus removed" },
      { pokemon: "Venusaur", change: "Solar Beam damage 27.5%→25%" },
    ],
    adjusted: [
      { pokemon: "Mega Lucario", change: "Close Combat now has a 1 s cancel delay" },
    ],
  };

  return (
    <div className="patch-updates-container">
      <h1 className="patch-title">Pokémon Patch Updates</h1>

      <TableSection title="🟩 Buffed Pokémon" color="#22c55e" list={patchData.buffed} />
      <TableSection title="🟥 Nerfed Pokémon" color="#ef4444" list={patchData.nerfed} />
      <TableSection title="🟨 Adjusted Pokémon" color="#facc15" list={patchData.adjusted} />
    </div>
  );
};

export default PatchUpdates;
