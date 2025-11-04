import axios from "axios";

// Base API configuration
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api", // backend base URL
  timeout: 10000, // 10 second timeout
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
  if (!name || typeof name !== 'string') {
    throw new Error('Invalid pokemon name provided');
  }
  
  // Sanitize the name parameter
  const sanitizedName = encodeURIComponent(name.trim());
  
  try {
    const response = await apiClient.get(`/pokemon/${sanitizedName}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`❌ API Error (${error.response.status}):`, error.response.data);
    } else if (error.request) {
      console.error('❌ Network Error:', error.message);
    } else {
      console.error(`❌ Error fetching details for ${name}:`, error.message);
    }
    throw error;
  }
};

export default apiClient;
