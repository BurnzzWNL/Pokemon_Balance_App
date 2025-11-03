export const trevenantData = {
  name: "Trevenant",
  description:
    "Trevenant is a Ghost- and Grass-type Defender that drains health from opponents and disrupts enemies with its spectral roots.",
  images: {
    card: "Trevenant.png",
    stats: "stat-trevenant.png",
    portrait: "Trevenant_portrait.png",
    icon: "Trevenant_icon.png"
  },
  ratings: {
    offense: 3,
    endurance: 5,
    mobility: 2,
    scoring: 2,
    support: 4
  },
  evolution: {
    stage: "Final",
    levels: [1, 5],
    evolutionImages: [
      "evolution-1-phantump.png",
      "evolution-2-trevenant.png"
    ],
    evolutionNames: ["Phantump", "Trevenant"]
  },
  abilities: ["Horn Leech", "Wood Hammer", "Curse"],
  intro:
    "Trevenant evolves from Phantump and uses ghostly vines to control fights. It regenerates health while dealing damage, sustaining itself as an anchor for its team."
};
