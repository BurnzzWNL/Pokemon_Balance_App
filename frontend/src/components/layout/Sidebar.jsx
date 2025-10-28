import React, { useState } from "react";
import "./Sidebar.css";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {
  const { darkMode } = useTheme();
  const [active, setActive] = useState("Buffed");

  const categories = ["Buffed", "Nerfed", "Adjusted"];

  return (
    <aside className={`sidebar ${darkMode ? "dark" : ""}`}>
      <h2 className="sidebar-title">Categories</h2>
      <ul className="sidebar-list">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`sidebar-item ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
