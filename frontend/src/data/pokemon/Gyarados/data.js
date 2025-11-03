export const gyaradosData = {
  name: "Gyarados",
  description:
    "Gyarados is an All-Rounder Pokémon that combines power and durability, striking fear into opponents with its devastating water attacks.",
  images: {
    card: "Gyarados.png",
    stats: "stat-gyarados.png",
    portrait: "Gyarados_portrait.png",
    icon: "Gyarados_icon.png"
  },
  ratings: {
    offense: 4,
    endurance: 4,
    mobility: 3,
    scoring: 3,
    support: 1
  },
  evolution: {
    stage: "Final",
    levels: [1, 5],
    evolutionImages: [
      "evolution-1-magikarp.png",
      "evolution-2-gyarados.png"
    ],
    evolutionNames: ["Magikarp", "Gyarados"]
  },
  abilities: ["Aqua Tail", "Dragon Dance", "Hurricane"],
  intro:
    "Evolving from Magikarp, Gyarados is a powerhouse that dominates mid to late game. Its strong AoE water moves and scaling endurance make it a constant threat in team fights."
};
