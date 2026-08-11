const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },

  title: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  poster: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
