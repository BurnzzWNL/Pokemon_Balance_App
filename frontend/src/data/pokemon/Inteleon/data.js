export const inteleonData = {
  name: "Inteleon",
  description:
    "Inteleon is a Water-type ranged Attacker that excels at sniping enemies from long distances with precise water projectiles.",
  images: {
    card: "Inteleon.png",
    stats: "stat-inteleon.png",
    portrait: "Inteleon_portrait.png",
    icon: "Inteleon_icon.png"
  },
  ratings: {
    offense: 5,
    endurance: 2,
    mobility: 3,
    scoring: 3,
    support: 1
  },
  evolution: {
    stage: "Final",
    levels: [1, 5, 7],
    evolutionImages: [
      "evolution-1-sobble.png",
      "evolution-2-drizzile.png",
      "evolution-3-inteleon.png"
    ],
    evolutionNames: ["Sobble", "Drizzile", "Inteleon"]
  },
  abilities: ["Snipe Shot", "Liquidation", "Tearful Look"],
  intro:
    "Inteleon evolves from Sobble and specializes in long-range precision attacks. Its sniper-like moves allow it to eliminate foes from afar before they can respond."
};
