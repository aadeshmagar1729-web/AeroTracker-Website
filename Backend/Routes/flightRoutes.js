const express = require("express");
const router = express.Router();

const { getFlight } = require("../controllers/flightController.js");

// route
router.get("/flight/:id", getFlight);

module.exports = router;
