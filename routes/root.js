const express = require("express");
const rateLimit = require("express-rate-limit");
const path = require("path");
const router = express.Router();

// Implementasi rate limit: maksimum 10 permintaan dalam 10 menit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 menit
  max: 10, // maksimum 10 permintaan
});

router.use(limiter); // Gunakan middleware rate limit untuk semua rute di router ini

router.get("/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
