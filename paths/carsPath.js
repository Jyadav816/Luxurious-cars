
const express = require("express");
const router = express.Router();
const Car = require("../models/carDiag");

router.get("/requirecars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
