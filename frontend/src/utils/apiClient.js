import axios from "axios";

// Base API configuration
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example endpoint wrappers
export const getBalanceData = async () => {
  try {
    const response = await apiClient.get("/balance");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching balance data:", error);
    throw error;
  }
};

export const getPokemonDetails = async (name) => {
  try {
    const response = await apiClient.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Error fetching details for ${name}:`, error);
    throw error;
  }
};

export default apiClient;
