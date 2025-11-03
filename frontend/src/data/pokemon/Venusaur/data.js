export const venusaurData = {
  name: "Venusaur",
  description:
    "Venusaur is a Grass- and Poison-type Attacker that uses area-based attacks to deal sustained damage and control the battlefield.",
  images: {
    card: "Venusaur.png",
    stats: "stat-venusaur.png",
    portrait: "Venusaur_portrait.png",
    icon: "Venusaur_icon.png"
  },
  ratings: {
    offense: 4,
    endurance: 3,
    mobility: 2,
    scoring: 3,
    support: 2
  },
  evolution: {
    stage: "Final",
    levels: [1, 5, 9],
    evolutionImages: [
      "evolution-1-bulbasaur.png",
      "evolution-2-ivysaur.png",
      "evolution-3-venusaur.png"
    ],
    evolutionNames: ["Bulbasaur", "Ivysaur", "Venusaur"]
  },
  abilities: ["Sludge Bomb", "Solar Beam", "Petal Dance"],
  intro:
    "Venusaur evolves from Ivysaur and focuses on controlling space with AoE poison and solar attacks. It can sustain itself with healing from Giga Drain while dealing heavy damage."
};
