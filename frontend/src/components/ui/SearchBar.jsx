import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full flex justify-center my-6">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-1/2 px-4 py-2 rounded-lg border outline-none text-sm transition-all duration-300 focus:ring-2 focus:ring-indigo-500 ${
          darkMode
            ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400"
            : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"
        }`}
      />
    </div>
  );
};

export default SearchBar;
