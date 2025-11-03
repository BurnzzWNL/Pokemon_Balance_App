export const cinderaceData = {
  name: "Cinderace",
  description: "Cinderace is a Fire-type Pokémon known for its incredible speed and powerful fire-based attacks. It excels as an Attacker with high mobility and scoring potential.",
  images: {
    card: "Cinderace.png",
    stats: "Cinderace_stats.png",
    portrait: "Cinderace_portrait.png",
    icon: "Cinderace_icon.png"
  },
  ratings: {
    offense: 4,
    endurance: 2,
    mobility: 3,
    scoring: 4,
    support: 2
  },
  evolution: {
    stage: "Final",
    levels: [1, 5, 7],
    evolutionImages: [
      "scorbunny.png",    // Level 1
      "raboot.png",       // Level 5  
      "cinderace.png"     // Level 7
    ],
    evolutionNames: [
      "Scorbunny",
      "Raboot", 
      "Cinderace"
    ]
  },
  abilities: [
    "Flame Charge",
    "Pyro Ball",
    "Blaze Kick"
  ],
  intro: "Cinderace is the final evolution of Scorbunny. This Fire-type striker Pokémon uses its powerful legs to deliver devastating fire attacks and maintain high mobility on the battlefield."
};