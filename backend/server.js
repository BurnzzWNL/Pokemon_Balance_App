import express from "express";
import cors from "cors";
import balanceRoutes from "./routes/balanceRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// 🧠 Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] // Replace with your actual domain
    : ['http://localhost:3000', 'http://localhost:5173'], // Development origins
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 🧭 Routes
app.use("/api/balance", balanceRoutes);

// 🩵 Health Check
app.get("/", (req, res) => {
  res.send("✅ Pokémon Balance API is running!");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
