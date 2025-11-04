import { getDefaultRatings } from "../data/pokemonRatings";

export const loadPokemonData = async (pokemonName) => {
  // Validate input
  if (!pokemonName || typeof pokemonName !== 'string') {
    throw new Error('Invalid pokemon name provided');
  }
  
  // Sanitize input to prevent path traversal
  const sanitizedName = pokemonName.replace(/[^a-zA-Z0-9\s._-]/g, '');
  if (sanitizedName !== pokemonName) {
    throw new Error('Invalid characters in pokemon name');
  }
  
  try {
    // Try different folder name formats
    const folderNames = [
      sanitizedName.replace(/\s+/g, '_').replace(/[.-]/g, '_'),
      sanitizedName.replace(/\s+/g, ''),
      sanitizedName
    ].filter(name => /^[a-zA-Z0-9_]+$/.test(name)); // Additional validation
    
    let module = null;
    for (const folderName of folderNames) {
      try {
        module = await import(`../data/pokemon/${folderName}/data.js`);
        break;
      } catch (e) {
        console.warn(`Failed to load data for folder: ${folderName}`);
        continue;
      }
    }
    
    if (module) {
      const dataKey = `${pokemonName.toLowerCase().replace(/[\s.-]/g, '')}Data`;
      return module[dataKey] || module.default || module;
    }
    
    throw new Error('No module found');
  } catch (error) {
    console.error(`Error loading pokemon data for ${pokemonName}:`, error);
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