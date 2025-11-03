export const zoroarkData = {
  name: "Zoroark",
  description:
    "Zoroark is a Dark-type Speedster that specializes in illusions and ambush tactics, confusing foes before striking decisively.",
  images: {
    card: "Zoroark.png",
    stats: "stat-zoroark.png",
    portrait: "Zoroark_portrait.png",
    icon: "Zoroark_icon.png"
  },
  ratings: {
    offense: 5,
    endurance: 2,
    mobility: 5,
    scoring: 3,
    support: 1
  },
  evolution: {
    stage: "Final",
    levels: [1, 5],
    evolutionImages: ["evolution-1-zorua.png", "evolution-2-zoroark.png"],
    evolutionNames: ["Zorua", "Zoroark"]
  },
  abilities: ["Feint Attack", "Night Slash", "Shadow Claw"],
  intro:
    "Zoroark evolves from Zorua and thrives on deception. It disguises itself to infiltrate enemy lines, striking suddenly and vanishing before retaliation."
};
