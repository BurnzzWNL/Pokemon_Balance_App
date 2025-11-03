export const gardevoirData = {
  name: "Gardevoir",
  description:
    "Gardevoir is a ranged Psychic- and Fairy-type Attacker capable of dealing high burst damage using psychic energy.",
  images: {
    card: "Gardevoir.png",
    stats: "stat-gardevoir.png",
    portrait: "Gardevoir_portrait.png",
    icon: "Gardevoir_icon.png"
  },
  ratings: {
    offense: 5,
    endurance: 2,
    mobility: 2,
    scoring: 3,
    support: 1
  },
  evolution: {
    stage: "Final",
    levels: [1, 5, 9],
    evolutionImages: [
      "evolution-1-ralts.png",
      "evolution-2-kirlia.png",
      "evolution-3-gardevoir.png"
    ],
    evolutionNames: ["Ralts", "Kirlia", "Gardevoir"]
  },
  abilities: ["Psychic", "Moonblast", "Future Sight"],
  intro:
    "Gardevoir evolves from Ralts and specializes in ranged psychic combat. Its area-of-effect abilities can control large zones and burst down grouped enemies."
};
