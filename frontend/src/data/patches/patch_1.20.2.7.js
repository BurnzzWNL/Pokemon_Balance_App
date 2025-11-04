// src/data/patches/patch_1.20.2.7.js
export const patch_1_20_2_7 = {
  version: "1.20.2.7",
  title: "Theia Sky Ruins Rebalance",
  date: "2025-11-04",
  current: true,
  generalUpdates: [
    "Map Theia Sky Ruins (Groudon) - Goal Zone and Objective Adjustments",
    "Regidrago now always moves toward bot lane with reduced roaming range"
  ],
  data: {
    buffed: [
      {
        pokemon: "Cinderace",
        change: "Pyro Ball cooldown reduced **5s → 4.5s**"
      },
      {
        pokemon: "Dragapult",
        change: "Dragon Breath damage increased **60% → 74%**, cooldown reduced **7.5s → 7s**"
      },
      {
        pokemon: "Lucario",
        change: "Power-Up Punch execute buffed **10% → 12% missing HP**, Close Combat cooldown **7.5s → 6.5s**"
      },
      {
        pokemon: "Mew",
        change: "Basic attack converted to special; Solar Beam and Surf damage increased"
      },
      {
        pokemon: "Pawmot",
        change: "Supercell Slam now grants shield and is unstoppable during cast; damage significantly boosted **130% → 187%** with improved area coverage and reduced startup time **0.8s → 0.6s**. Shield scales with **45% SpAtk** and lasts **3 seconds**. Move now has priority over other abilities and cannot be interrupted by crowd control effects."
      },
      {
        pokemon: "Pawmot",
        change: "Volt Switch cooldown **8s → 7s**, damage increased **144% → 158%**"
      },
      {
        pokemon: "Zoroark",
        change: "Cut & Cut+ healing buffed **46% → 62%**, Night Slash input window extended **2s → 2.5s**"
      }
    ],
    nerfed: [
      {
        pokemon: "Absol",
        change: "Pursuit & Midnight Slash base damage decreased; backstab cooldown reduction **80% → 70%**"
      },
      {
        pokemon: "Aegislash",
        change: "Wide Guard cooldown **8s → 8.5s**, throw duration **0.75s → 0.6s**"
      },
      {
        pokemon: "Ceruledge",
        change: "Psycho Cut and Revenant Rend damage reduced; defense debuff decreased"
      },
      {
        pokemon: "Comfey",
        change: "Triage and Sweet Kiss shields reduced; Grass Knot damage lowered **78% → 55%**"
      },
      {
        pokemon: "Pawmot",
        change: "Life Steal nerfed across levels; Thunder Punch power reduced and now paralyzes"
      },
      {
        pokemon: "Umbreon",
        change: "Foul Play cooldown **7s → 7.5s**, shove duration **1s → 0.6s**"
      },
      {
        pokemon: "Zoroark",
        change: "Shadow Claw & Shadow Claw+ stun duration **0.1s → 0.05s**"
      }
    ],
    adjusted: [
      {
        pokemon: "Map: Theia Sky Ruins",
        change: "Goal Zone HP adjusted — Top: **70→80**, Bot Forward: **80→90**, Bot Middle: **120→100**"
      },
      {
        pokemon: "Groudon",
        change: "Fire Blast & Rock Tomb range increased, Precipice Blades & Earthquake range decreased"
      },
      {
        pokemon: "Regidrago",
        change: "Always moves bot lane; narrowed roaming area"
      }
    ],
    bugfixes: [
      {
        pokemon: "Dragapult",
        change: "Fixed Unite Move bug targeting Raichu's Electro Ball"
      },
      {
        pokemon: "Tsareena",
        change: "Fixed bug preventing Groudon buff when KO’d during Queen Ascendant"
      }
    ]
  }
};
