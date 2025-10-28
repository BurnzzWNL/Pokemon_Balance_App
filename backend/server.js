import express from "express";
import cors from "cors";
import balanceRoutes from "./routes/balanceRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// 🧠 Middleware
app.use(cors());
app.use(express.json());

// 🧭 Routes
app.use("/api/balance", balanceRoutes);

// 🩵 Health Check
app.get("/", (req, res) => {
  res.send("✅ Pokémon Balance API is running!");
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
