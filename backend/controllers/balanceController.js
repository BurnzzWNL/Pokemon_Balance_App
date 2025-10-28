import { readJSONFile } from "../utils/fileUtils.js";

// 📦 Get all Pokémon balance data
export const getAllBalances = (req, res) => {
  try {
    const data = readJSONFile("data/pokemonData.json");
    res.json(data);
  } catch (error) {
    console.error("Error reading Pokémon data:", error);
    res.status(500).json({ error: "Failed to load Pokémon data." });
  }
};

// 🔍 Get Pokémon by name (case-insensitive)
export const getPokemonByName = (req, res) => {
  try {
    const { name } = req.params;
    const data = readJSONFile("data/pokemonData.json");

    const allPokemons = [
      ...data.buffed.map((p) => ({ ...p, status: "buffed" })),
      ...data.nerfed.map((p) => ({ ...p, status: "nerfed" })),
      ...data.adjusted.map((p) => ({ ...p, status: "adjusted" })),
    ];

    const pokemon = allPokemons.find(
      (p) => p.pokemon.toLowerCase() === name.toLowerCase()
    );

    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ message: `Pokémon '${name}' not found.` });
    }
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    res.status(500).json({ error: "Failed to fetch Pokémon data." });
  }
};
