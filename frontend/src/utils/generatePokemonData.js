import pokemonData from "../data/pokemon_Complete_Details.json";
import { getDefaultRatings } from "../data/pokemonRatings";

const evolutionData = {
  "Charizard": { stage: "Final", levels: [1, 16, 36], names: ["Charmander", "Charmeleon", "Charizard"], images: ["charmander.png", "charmeleon.png", "charizard.png"] },
  "Blastoise": { stage: "Final", levels: [1, 16, 36], names: ["Squirtle", "Wartortle", "Blastoise"], images: ["squirtle.png", "wartortle.png", "blastoise.png"] },
  "Venusaur": { stage: "Final", levels: [1, 16, 36], names: ["Bulbasaur", "Ivysaur", "Venusaur"], images: ["bulbasaur.png", "ivysaur.png", "venusaur.png"] },
  "Cinderace": { stage: "Final", levels: [1, 5, 7], names: ["Scorbunny", "Raboot", "Cinderace"], images: ["scorbunny.png", "raboot.png", "cinderace.png"] },
  "Inteleon": { stage: "Final", levels: [1, 5, 7], names: ["Sobble", "Drizzile", "Inteleon"], images: ["sobble.png", "drizzile.png", "inteleon.png"] },
  "Decidueye": { stage: "Final", levels: [1, 5, 7], names: ["Rowlet", "Dartrix", "Decidueye"], images: ["rowlet.png", "dartrix.png", "decidueye.png"] },
  "Greninja": { stage: "Final", levels: [1, 5, 7], names: ["Froakie", "Frogadier", "Greninja"], images: ["froakie.png", "frogadier.png", "greninja.png"] },
  "Delphox": { stage: "Final", levels: [1, 5, 7], names: ["Fennekin", "Braixen", "Delphox"], images: ["fennekin.png", "braixen.png", "delphox.png"] },
  "Blaziken": { stage: "Final", levels: [1, 5, 7], names: ["Torchic", "Combusken", "Blaziken"], images: ["torchic.png", "combusken.png", "blaziken.png"] },
  "Gardevoir": { stage: "Final", levels: [1, 4, 6], names: ["Ralts", "Kirlia", "Gardevoir"], images: ["ralts.png", "kirlia.png", "gardevoir.png"] },
  "Machamp": { stage: "Final", levels: [1, 4, 6], names: ["Machop", "Machoke", "Machamp"], images: ["machop.png", "machoke.png", "machamp.png"] },
  "Slowbro": { stage: "Final", levels: [1, 4], names: ["Slowpoke", "Slowbro"], images: ["slowpoke.png", "slowbro.png"] },
  "Crustle": { stage: "Final", levels: [1, 4], names: ["Dwebble", "Crustle"], images: ["dwebble.png", "crustle.png"] },
  "Cramorant": { stage: "Basic", levels: [1], names: ["Cramorant"], images: ["cramorant.png"] }
};

export const generateDataFile = (pokemon) => {
  const evolution = evolutionData[pokemon.name] || { stage: "Basic", levels: [1], names: [pokemon.name], images: [`${pokemon.name.toLowerCase()}.png`] };
  
  return `export const ${pokemon.name.toLowerCase().replace(/[^a-z]/g, '')}Data = {
  name: "${pokemon.name}",
  description: "${pokemon.name} brings unique abilities and strategic gameplay to the battlefield of Aeos Island.",
  images: {
    card: "${pokemon.name}.png",
    stats: "${pokemon.name}_stats.png",
    portrait: "${pokemon.name}_portrait.png",
    icon: "${pokemon.name}_icon.png"
  },
  ratings: ${JSON.stringify(getDefaultRatings(pokemon.name), null, 4)},
  evolution: {
    stage: "${evolution.stage}",
    levels: ${JSON.stringify(evolution.levels)},
    evolutionImages: ${JSON.stringify(evolution.images)},
    evolutionNames: ${JSON.stringify(evolution.names)}
  },
  abilities: [
    "Ability 1",
    "Ability 2", 
    "Ability 3"
  ],
  intro: "${pokemon.name} is a ${pokemon.type[0]}-type Pokémon with ${pokemon.difficulty.toLowerCase()} difficulty in Pokémon UNITE."
};`;
};

// Generate all data files
pokemonData.forEach(pokemon => {
  console.log(`// File: ${pokemon.name}/data.js`);
  console.log(generateDataFile(pokemon));
  console.log('\n');
});