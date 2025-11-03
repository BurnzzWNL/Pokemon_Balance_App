import { getDefaultRatings } from "../data/pokemonRatings";

export const loadPokemonData = async (pokemonName) => {
  try {
    // Try different folder name formats
    const folderNames = [
      pokemonName.replace(/\s+/g, '_').replace(/[.-]/g, '_'),
      pokemonName.replace(/\s+/g, ''),
      pokemonName
    ];
    
    let module = null;
    for (const folderName of folderNames) {
      try {
        module = await import(`../data/pokemon/${folderName}/data.js`);
        break;
      } catch (e) {
        continue;
      }
    }
    
    if (module) {
      const dataKey = `${pokemonName.toLowerCase().replace(/[\s.-]/g, '')}Data`;
      return module[dataKey] || module.default || module;
    }
    
    throw new Error('No module found');
  } catch (error) {
    // Return default data if individual Pokemon data doesn't exist
    return {
      name: pokemonName,
      description: `${pokemonName} brings unique abilities and strategic gameplay to the battlefield of Aeos Island.`,
      ratings: getDefaultRatings(pokemonName),
      evolution: {
        stage: "Basic",
        evolutionImages: []
      },
      abilities: ["Thunder Shock", "Quick Attack", "Agility"],
      intro: `Learn more about ${pokemonName}'s capabilities in Pokémon UNITE.`
    };
  }
};