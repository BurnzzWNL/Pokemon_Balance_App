export const patch_1_20_3_10 = {
  version: "1.20.3.10",
  title: "Guardian Awakening",
  date: "2025-10-23",
  current: true,

  generalUpdates: [
    "Map Theia Sky Ruins (Groudon) - Objectives Updated",
    "Regieleki timer now appears in yellow giving players info on where each objective will spawn 30s in advance",
    "Wild Pokémon - Top Path Spawns Adjusted (Bunnelby replaced with Baltoy, same XP but reduced Aeos energy)"
  ],

  data: {
    buffed: [
      { pokemon: "Alcremie", change: "Now benefits from Wild Pokémon Damage Bonus" },
      { pokemon: "Blaziken", change: "Blaze passive healing increased (7%→10% HP, under 50% HP: 10%→15%)" },
      { pokemon: "Blaziken", change: "Blaze Kick slow increased from 25% to 30%" },
      { pokemon: "Blissey", change: "Soft-Boiled healing ratios and base healing increased" },
      { pokemon: "Darkrai", change: "Cooldown reduction increased (5%→20% from Lvl 9+)" },
      { pokemon: "Darkrai", change: "Dark Pulse cooldown reduced (8s→7s) and damage increased (150%→180%)" },
      { pokemon: "Eldegoss", change: "Leaf Tornado cooldown reduced (9s→8s)" },
      { pokemon: "Eldegoss", change: "Cotton Spore slow increased (30%→40%) and defenses buffed (40%→50%)" },
      { pokemon: "Gengar", change: "Levitate speed bonus increased (10%→20%)" },
      { pokemon: "Gengar", change: "Dream Eater healing improved (50%→60% SpAtk), Sludge Bomb cooldown reduced" },
      { pokemon: "Hoopa", change: "Now benefits from Wild Pokémon Damage Bonus (Hoopa Unbound excluded)" },
      { pokemon: "Latias", change: "Now benefits from Wild Pokémon Damage Bonus and learns moves earlier" },
      { pokemon: "Latias", change: "Dragon Pulse and Mist Ball cooldowns reduced, added new mobility effect" },
      { pokemon: "Mr. Mime", change: "HP, Defense, and Special Defense increased across all levels" },
      { pokemon: "Mr. Mime", change: "Barrier cooldown reduced (8s→7.5s)" },
      { pokemon: "Pawmot", change: "Thunder Punch cooldown reduced (6s→5.5s)" }
    ],

    nerfed: [
      { pokemon: "Dragonite", change: "Hyper Beam additional damage reduced (20%→15% of opponent HP)" },
      { pokemon: "Empoleon", change: "Removed Wild Pokémon Damage Bonus, healing and damage reduced" },
      { pokemon: "Empoleon", change: "Metal Claw and Hydro Cannon damage and shields reduced" },
      { pokemon: "Empoleon", change: "Whirlpool and Unite Move (Sovereign Slide) power reduced" },
      { pokemon: "Pawmot", change: "Supercell Slam damage reduced across all uses and cooldown increased" },
      { pokemon: "Pikachu", change: "Electro Ball base damage reduced" },
      { pokemon: "Alolan Raichu", change: "Electro Ball manual detonation damage reduced (213%→203%)" },
      { pokemon: "Slowbro", change: "Scald and Amnesia damage/cooldown nerfed" },
      { pokemon: "Venusaur", change: "Solar Beam damage reduced (27.5%→25%), Petal Dance cooldown increased" },
      { pokemon: "Venusaur", change: "Solar Beam+ cooldown increased (7s→8s)" }
    ],

    adjusted: [
      { pokemon: "Mega Lucario", change: "Close Combat now has 1s delay before canceling into another action" },
      { pokemon: "Regieleki", change: "Timer visuals adjusted to yellow with advance spawn indicator" },
      { pokemon: "Bunnelby", change: "Replaced with Baltoy on top path; same XP, less Aeos energy" }
    ]
  }
};
