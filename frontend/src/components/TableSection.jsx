import React from "react";
import Card from "./ui/Card";
import Loader from "./Loader";
import "./TableSection.css";
import { useTheme } from "../context/ThemeContext";
import { getPokemonImage } from "../utils/pokemonImages";

const TableSection = ({ title, color, list }) => {
  const { darkMode } = useTheme();

  if (!list || list.length === 0) return <Loader />;

  // ✅ Combine all changes for the same Pokémon into one entry
  const combinedList = Object.values(
    list.reduce((acc, { pokemon, change }) => {
      if (!acc[pokemon]) acc[pokemon] = { pokemon, changes: [] };
      acc[pokemon].changes.push(change);
      return acc;
    }, {})
  );

  // ✅ Highlight numbers, % and arrows (→, ->)
  const highlightText = (text) => {
    const regex = /(\d+(\.\d+)?%|\d+s|→|->|[0-9]+→[0-9]+)/g;
    return text.split(regex).map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} style={{ color, fontWeight: "600" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className={`table-section ${darkMode ? "dark" : ""}`}>
      <h2 className="section-title" style={{ color }}>
        {title}
      </h2>

      <div className="card-grid">
        {combinedList.map((item, idx) => {
          const imageSrc = getPokemonImage(item.pokemon);

          // ✅ Combine multiple changes into a single formatted string
          const combinedChangeText = item.changes.map((c, i) => (
            <li key={i}>{highlightText(c)}</li>
          ));

          return (
            <Card
              key={`${item.pokemon}-${idx}`}
              pokemon={item.pokemon}
              change={
                <ul className="multi-change-list">{combinedChangeText}</ul>
              }
              image={imageSrc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TableSection;
