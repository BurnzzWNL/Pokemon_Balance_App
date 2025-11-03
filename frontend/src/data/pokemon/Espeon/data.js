export const espeonData = {
  name: "Espeon",
  description:
    "Espeon is a Psychic-type ranged Attacker that uses psychic blasts to overwhelm enemies from a distance.",
  images: {
    card: "Espeon.png",
    stats: "stat-espeon.png",
    portrait: "Espeon_portrait.png",
    icon: "Espeon_icon.png"
  },
  ratings: {
    offense: 4,
    endurance: 2,
    mobility: 3,
    scoring: 3,
    support: 1
  },
  evolution: {
    stage: "Final",
    levels: [1, 4],
    evolutionImages: ["evolution-1-eevee.png", "evolution-2-espeon.png"],
    evolutionNames: ["Eevee", "Espeon"]
  },
  abilities: ["Psyshock", "Future Sight", "Stored Power"],
  intro:
    "Evolving from Eevee, Espeon delivers precise psychic attacks that disrupt and damage opponents. It excels in mid-range engagements and lane control."
};
