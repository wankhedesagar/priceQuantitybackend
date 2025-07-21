const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// pricecalculator

// MongoDB Connection (without .env)
mongoose.connect('mongodb://localhost:27017/pricecalculator')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Routes
const calculationRoutes = require("./routes/calculationRoutes");
app.use("/api/calculate", calculationRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
