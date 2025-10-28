import React, { createContext, useState, useEffect, useContext } from "react";

// Create Theme Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from localStorage (default: light)
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Apply theme class to <html> root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
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
