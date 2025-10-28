import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Helper to resolve current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Reads and parses a JSON file.
 * @param {string} relativePath - Path relative to backend root.
 * @returns {Object} Parsed JSON data.
 */
export const readJSONFile = (relativePath) => {
  const filePath = path.join(__dirname, "..", relativePath);
  const rawData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
};
