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
 * @throws {Error} When file cannot be read or parsed.
 */
export const readJSONFile = (relativePath) => {
  if (!relativePath || typeof relativePath !== 'string') {
    throw new Error('Invalid file path provided');
  }
  
  try {
    const filePath = path.resolve(__dirname, "..", relativePath);
    
    // Validate path is within expected directory
    const backendRoot = path.resolve(__dirname, "..");
    if (!filePath.startsWith(backendRoot)) {
      throw new Error('Path traversal attempt detected');
    }
    
    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${relativePath}`);
    }
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in file: ${relativePath}`);
    }
    throw error;
  }
};
