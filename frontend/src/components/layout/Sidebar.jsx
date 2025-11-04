import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {
  const { darkMode } = useTheme();
  const location = useLocation();

  const navigationLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/pokemon", label: "Pokémon List", icon: "📋" },
    { path: "/patch-updates", label: "Patch Updates", icon: "📝" },
    { path: "/tier-list", label: "Tier List", icon: "🏆" },
    { path: "/team-comps", label: "Team Comps", icon: "👥" }
  ];

  return (
    <aside className={`sidebar ${darkMode ? "dark" : ""}`}>
      <h2 className="sidebar-title">Quick Access</h2>
      <ul className="sidebar-list">
        {navigationLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`sidebar-item ${location.pathname === link.path ? "active" : ""}`}
            >
              <span className="sidebar-icon">{link.icon}</span>
              <span className="sidebar-label">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
