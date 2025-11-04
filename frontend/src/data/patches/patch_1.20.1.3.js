// src/data/patches/patch_1.20.1.3.js
export const patch_1_20_1_3 = {
  version: "1.20.1.3",
  title: "Hotfix",
  date: "2025-09-05",
  current: false,
  generalUpdates: [
    "Adjusted EXP values for Regidrago and Groudon to balance early-game objectives.",
    "Minor stat tuning and ability scaling for Pawmot to improve consistency across levels."
  ],
  data: {
    buffed: [
      {
        pokemon: "Pawmot",
        change: "Natural stat growth significantly increased — higher **HP, Defense, Sp. Defense, Attack Speed, and Lifesteal** across levels."
      },
      {
        pokemon: "Pawmot",
        change: "Thunder Punch damage buffed — Ratio **230% → 253%**, Base **400 → 440**; Fighter Mode **320% → 352%**, Base **560 → 616**."
      },
      {
        pokemon: "Pawmot",
        change: "Thunder Punch+ improved — Ratio **265% → 292%**, Fighter Mode **370% → 407%**, maintaining higher scaling."
      },
      {
        pokemon: "Pawmot",
        change: "Volt Switch damage increased — Ratio **130% → 144%**, Base **200 → 220**; Fighter Mode **260% → 286%**, Base **400 → 440**."
      },
      {
        pokemon: "Pawmot",
        change: "Unite Move ‘Zip Zap Full-Charge Spark’ enhanced — now resets cooldowns of other moves upon use; range increased **6m → 7m**; Unite Gauge gain increased (**Basic: 3% → 4%**, **Moves: 6% → 8%**)."
      }
    ],
    nerfed: [],
    adjusted: [
      {
        pokemon: "Regidrago",
        change: "Base EXP decreased **660 → 160**."
      },
      {
        pokemon: "Groudon",
        change: "Base EXP increased **440 → 880**."
      }
    ]
  }
};
