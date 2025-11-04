import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import PatchUpdates from "./pages/PatchUpdates";
import TierList from "./pages/TierList";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          {/* 🔹 Global Navbar */}
          <Navbar />
          
          {/* 🔹 Sidebar */}
          <Sidebar />

          {/* 🔹 Page Routing */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pokemon" element={<PokemonList />} />
              <Route path="/pokemon/:name" element={<PokemonDetails />} />
              <Route path="/patch-updates" element={<PatchUpdates />} />
              <Route path="/tier-list" element={<TierList />} />
            </Routes>
          </main>

          {/* 🔹 Global Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
