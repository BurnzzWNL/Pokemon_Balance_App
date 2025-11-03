export const machampData = {
  name: "Machamp",
  description:
    "Machamp is a Fighting-type All-Rounder with powerful melee moves. It dominates close-range combat using sheer physical strength.",
  images: {
    card: "Machamp.png",
    stats: "stat-machamp.png",
    portrait: "Machamp_portrait.png",
    icon: "Machamp_icon.png"
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
    levels: [1, 5, 9],
    evolutionImages: [
      "evolution-1-machop.png",
      "evolution-2-machoke.png",
      "evolution-3-machamp.png"
    ],
    evolutionNames: ["Machop", "Machoke", "Machamp"]
  },
  abilities: ["Cross Chop", "Dynamic Punch", "Submission"],
  intro:
    "Machamp evolves from Machoke and shines in frontline battles. Its combination of crowd control and burst damage makes it ideal for aggressive playstyles."
};
