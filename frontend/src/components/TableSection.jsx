import React, { useState } from "react";
import Card from "./ui/Card";
import SearchBar from "./ui/SearchBar";
import Loader from "./Loader";
import "./TableSection.css";
import { useTheme } from "../context/ThemeContext";
import { getPokemonImage } from "../utils/pokemonImages";

const TableSection = ({ title, color, list }) => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  if (!list || list.length === 0) return <Loader />;

  const filteredList = list.filter((item) =>
    item.pokemon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={`table-section ${darkMode ? "dark" : ""}`}>
      <h2 className="section-title" style={{ color }}>
        {title}
      </h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredList.length > 0 ? (
        <div className="card-grid">
          {filteredList.map((item, idx) => {
            const imageSrc = getPokemonImage(item.pokemon);

            return (
              <Card
                key={idx}
                pokemon={item.pokemon}
                change={item.change}
                image={imageSrc}
              />
            );
          })}
        </div>
      ) : (
        <p className="no-results">No Pokémon found matching “{searchTerm}”.</p>
      )}
    </section>
  );
};

export default TableSection;
