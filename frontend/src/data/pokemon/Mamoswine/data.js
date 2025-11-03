export const mamoswineData = {
  name: "Mamoswine",
  description:
    "Mamoswine is an Ice- and Ground-type Defender that uses freezing attacks to control opponents and protect allies.",
  images: {
    card: "Mamoswine.png",
    stats: "stat-mamoswine.png",
    portrait: "Mamoswine_portrait.png",
    icon: "Mamoswine_icon.png"
  },
  ratings: {
    offense: 3,
    endurance: 5,
    mobility: 2,
    scoring: 2,
    support: 3
  },
  evolution: {
    stage: "Final",
    levels: [1, 5, 9],
    evolutionImages: [
      "evolution-1-swinub.png",
      "evolution-2-piloswine.png",
      "evolution-3-mamoswine.png"
    ],
    evolutionNames: ["Swinub", "Piloswine", "Mamoswine"]
  },
  abilities: ["Ice Fang", "High Horsepower", "Icicle Crash"],
  intro:
    "Mamoswine evolves from Piloswine and brings freezing power to the frontline. It immobilizes enemies and shields allies, making it one of the best crowd controllers in UNITE."
};
