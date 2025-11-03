export const gengarData = {
  name: "Gengar",
  description:
    "Gengar is a Speedster Pokémon that excels at ambushing opponents and bursting them down with high mobility and poison-based attacks.",
  images: {
    card: "Gengar.png",
    stats: "stat-gengar.png",
    portrait: "Gengar_portrait.png",
    icon: "Gengar_icon.png"
  },
  ratings: {
    offense: 4,
    endurance: 2,
    mobility: 5,
    scoring: 3,
    support: 1
  },
  evolution: {
    stage: "Final",
    levels: [1, 5, 9],
    evolutionImages: [
      "evolution-1-gastly.png",
      "evolution-2-haunter.png",
      "evolution-3-gengar.png"
    ],
    evolutionNames: ["Gastly", "Haunter", "Gengar"]
  },
  abilities: ["Sludge Bomb", "Hex", "Dream Eater"],
  intro:
    "Gengar evolves from Haunter and thrives as an assassin-style Speedster. It uses poisons and teleportation to eliminate squishy targets quickly and vanish before retaliation."
};
