const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON requests

// Routes
app.use("/auth", authRoutes); // Base route for authentication

module.exports = app;
