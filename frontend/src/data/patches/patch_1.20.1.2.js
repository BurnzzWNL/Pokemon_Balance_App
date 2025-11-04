// src/data/patches/patch_1.20.1.2.js
export const patch_1_20_1_2 = {
  version: "1.20.1.2",
  title: "Celestial Rumble",
  date: "2025-09-04",
  current: false,
  generalUpdates: [
    "Fixed a Rocky Helmet bug where its damage incorrectly reduced cooldowns for Lucario's Power-Up Punch and Trevenant's Natural Cure.",
    "Major Pokémon balance updates focusing on fire-type attackers and stat reworks for Venusaur and Inteleon."
  ],
  data: {
    buffed: [
      {
        pokemon: "Armarouge",
        change:
          "Armor Cannon explosion damage buffed — Ratio **214% → 246%**, Base **405 → 466**; shockwave buffed **64% → 74%**, Base **121 → 172**."
      },
      {
        pokemon: "Armarouge",
        change:
          "Flame Charge shield increased — Ratio **120% → 138%**, Base **150 → 172**."
      },
      {
        pokemon: "Delphox",
        change:
          "Flame Charge damage increased — Ratio **46% → 60%**, Base **240 → 312**; + version speed boost duration **1.5 s → 2 s**."
      },
      {
        pokemon: "Inteleon",
        change:
          "Natural Stats buffed — overall increases to **HP, Defense, Sp. Defense** and faster attack scaling."
      },
      {
        pokemon: "Inteleon",
        change:
          "Snipe Shot and Acrobatics cooldowns reduced **7.5 s → 7 s**."
      },
      {
        pokemon: "Mewtwo X",
        change:
          "Pressure stat bonuses increased — Atk/Def/SpDef buffs **10% → 18%**; Teleport speed **10% → 20%**; Teleport+ damage increase **15% → 20%**."
      },
      {
        pokemon: "Mewtwo Y",
        change:
          "Recover buffed — Move speed **10% → 30%**, healing **30% → 40%**, Shield **70% → 77% SpAtk**, Base **310 → 340**, plus extra **7 % → 7.7 % Max HP** shield."
      },
      {
        pokemon: "Mewtwo Y",
        change:
          "Recover+ further improves healing **40% → 50%**."
      },
      {
        pokemon: "Tinkaton",
        change:
          "Smack Down now also deals hammer damage; Ice Hammer reworked into leap AoE with increased damage **100% → 120% Atk**."
      },
      {
        pokemon: "Trevenant",
        change:
          "Curse slows and now stuns when gauge is full; Pain Split and Horn Leech healing increased."
      },
      {
        pokemon: "Venusaur",
        change:
          "Natural Stats buffed — higher HP, Defense, and Sp.Def across levels."
      },
      {
        pokemon: "Venusaur",
        change:
          "Solar Beam tick damage increased **1.5 % → 2.5 % of enemy Max HP** per hit."
      }
    ],

    nerfed: [
      {
        pokemon: "Charizard",
        change:
          "Flamethrower cooldown **5.5 s → 6 s**, duration **4 s → 3 s**, damage reduced **145 % → 131 %** (Base 160 → 144)."
      },
      {
        pokemon: "Charizard",
        change:
          "Flamethrower+ damage lowered **170 % → 154 %**, Base **190 → 170**."
      },
      {
        pokemon: "Charizard",
        change:
          "Fire Blast & Fire Blast+ damage reduced (approx. **150 % → 131 %**) and area ticks weakened."
      },
      {
        pokemon: "Charizard",
        change:
          "Flare Blitz damage nerfed **200 % → 160 % Atk**, Base **242 → 193**."
      },
      {
        pokemon: "Ho-Oh",
        change:
          "Flamethrower and Tailwind damage reduced; Safeguard cooldown **5 s → 6 s**."
      },
      {
        pokemon: "Latios",
        change:
          "Dragon Pulse boosted-attack damage **150 % → 128 %**, projectile **42 % → 35.7 %**."
      },
      {
        pokemon: "Mewtwo X",
        change:
          "Now permanently holds Mewtwonite X as a fixed item."
      },
      {
        pokemon: "Mewtwo Y",
        change:
          "Attack-speed scaling from Pressure reduced — stacks now give **3 %** (flat) instead of **6 %**, Mega buff **40 % → 35 %**."
      },
      {
        pokemon: "Rapidash (Galarian)",
        change:
          "Confusion damage reduced **100 % → 90 %**, Base **350 → 315**; Dazzling Gleam **137 % → 131 %**."
      },
      {
        pokemon: "Tinkaton",
        change:
          "Thief movement speed buffs reduced **25 % → 20 %**, hindered-target bonus **50 % → 40 %**."
      },
      {
        pokemon: "Zacian",
        change:
          "Slash & Play Rough damage reduced — Slash **189 % → 160 %**, Boosted **245 % → 208 %**; Play Rough **146 % → 132 %**."
      }
    ],

    adjusted: [
      {
        pokemon: "Rocky Helmet",
        change:
          "Fixed held-item bug affecting Lucario and Trevenant cooldown reduction."
      }
    ],

    bugfixes: [
      {
        pokemon: "Meowscarada",
        change:
          "Fixed Flower Trick damage miscalculation with missing-HP scaling."
      },
      {
        pokemon: "Alolan_Raichu",
        change:
          "Fixed Unite Move activation-range mismatch."
      },
      {
        pokemon: "Mewtwo X & Y",
        change:
          "Future Sight now correctly applies delayed second hit and ally contribution after 3 seconds."
      }
    ]
  }
};
