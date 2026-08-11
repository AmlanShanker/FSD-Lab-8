const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

// GET ALL MOVIES
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET MOVIE BY ID
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({
      id: req.params.id,
    });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
