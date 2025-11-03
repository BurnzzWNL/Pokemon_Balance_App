export const glaceonData = {
  name: "Glaceon",
  description:
    "Glaceon is a ranged Ice-type Attacker that freezes and slows enemies with precise bursts of chilling energy.",
  images: {
    card: "Glaceon.png",
    stats: "stat-glaceon.png",
    portrait: "Glaceon_portrait.png",
    icon: "Glaceon_icon.png"
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
    evolutionImages: ["evolution-1-eevee.png", "evolution-2-glaceon.png"],
    evolutionNames: ["Eevee", "Glaceon"]
  },
  abilities: ["Icicle Spear", "Icy Wind", "Freeze-Dry"],
  intro:
    "Evolving from Eevee, Glaceon excels at crowd control through freezing attacks. Its icy shards and slippery movement make it deadly in skilled hands."
};
