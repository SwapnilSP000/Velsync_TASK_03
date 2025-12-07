const express = require("express");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Your Node backend is running smoothly.",
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
