import express from "express";
import { getAllBalances, getPokemonByName } from "../controllers/balanceController.js";

const router = express.Router();

// 🧠 Fetch all Pokémon balance data
router.get("/", getAllBalances);

// 🔍 Fetch a single Pokémon by name
router.get("/:name", getPokemonByName);

export default router;
