// Capitalize the first letter of Pokémon names
export const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

// Shorten long descriptions (useful for tooltips)
export const truncateText = (text, maxLength = 80) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

// Get color theme based on Pokémon type (for badges or highlights)
export const getTypeColor = (type) => {
  const colors = {
    Fire: "#F87171",
    Water: "#60A5FA",
    Grass: "#4ADE80",
    Electric: "#FACC15",
    Psychic: "#F472B6",
    Dark: "#6B7280",
    Fairy: "#F9A8D4",
    Steel: "#94A3B8",
  };
  return colors[type] || "#A1A1AA"; // default gray
};
