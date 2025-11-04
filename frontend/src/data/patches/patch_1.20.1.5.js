// src/data/patches/patch_1.20.1.5.js
export const patch_1_20_1_5 = {
  version: "1.20.1.5",
  title: "Empoleon Hotfix",
  date: "2025-09-20",
  current: false,
  generalUpdates: [
    "Targeted balance adjustments for Empoleon focusing on move ratios and healing consistency.",
    "Goal: Reduce burst potential and improve overall gameplay balance."
  ],
  data: {
    buffed: [],
    nerfed: [
      {
        pokemon: "Empoleon",
        change: "Water Gun damage significantly reduced — Ratio **220% → 143%**, Slider **20 → 13**, Base **550 → 358**."
      },
      {
        pokemon: "Empoleon",
        change: "Water Gun (Torrent) damage reduced — Ratio **330% → 214%**, Slider **30 → 20**, Base **825 → 536**."
      },
      {
        pokemon: "Empoleon",
        change: "Peck damage reduced — Ratio **200% → 130%**, Slider **18 → 12**, Base **500 → 325**."
      },
      {
        pokemon: "Empoleon",
        change: "Hydro Cannon damage nerfed — Ratio **350% → 266%**, Slider **20 → 15**, Base **525 → 400**."
      },
      {
        pokemon: "Empoleon",
        change: "Hydro Cannon (Torrent) Whirlpool damage reduced (6 hits) — Ratio **70% → 53%**, Slider **4 → 3**, Base **105 → 80**."
      },
      {
        pokemon: "Empoleon",
        change: "Hydro Cannon (Torrent) healing reduced — Ratio **74% → 59%**, Base **200 → 160**."
      },
      {
        pokemon: "Empoleon",
        change: "Whirlpool damage (4 hits) reduced — Ratio **80% → 70%**, Base **120 → 106**."
      },
      {
        pokemon: "Empoleon",
        change: "Whirlpool healing decreased — Players: **60% → 40%**, Wilds: **30% → 20%** of damage dealt."
      },
      {
        pokemon: "Empoleon",
        change: "Whirlpool (Torrent) damage reduced — Ratio **96% → 85%**, Base **144 → 126**."
      },
      {
        pokemon: "Empoleon",
        change: "Whirlpool+ damage (4 hits) reduced — Ratio **100% → 85%**, Slider **2 → 4**, Base **159 → 126**."
      },
      {
        pokemon: "Empoleon",
        change: "Whirlpool+ (Torrent) damage reduced — Ratio **115% → 102%**, Slider **6 → 5**, Base **174 → 154**."
      },
      {
        pokemon: "Empoleon",
        change: "Healing (Players: **80% → 50%**, Wilds: **40% → 25%**) further reduced to balance sustain."
      }
    ],
    adjusted: []
  }
};
