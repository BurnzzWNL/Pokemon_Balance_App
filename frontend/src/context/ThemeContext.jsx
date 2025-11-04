import React, { createContext, useState, useEffect, useContext } from "react";

// Create Theme Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from localStorage (default: light)
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    } catch (error) {
      console.warn('Failed to access localStorage for theme:', error);
      return false; // default to light mode
    }
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Apply theme to document root
  useEffect(() => {
    try {
      const theme = darkMode ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for easier usage in components
export const useTheme = () => useContext(ThemeContext);
