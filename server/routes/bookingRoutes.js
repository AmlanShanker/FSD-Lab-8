const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Movie = require("../models/Movie");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { movieId, seats } = req.body;

    if (!seats || seats <= 0) {
      return res.status(400).json({
        message: "Number of seats must be greater than 0",
      });
    }

    const movie = await Movie.findOne({
      id: movieId,
    });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    const totalAmount = movie.price * seats;

    const booking = new Booking({
      customer: req.customerId,
      movie: movie._id,
      seats: seats,
      totalAmount: totalAmount,
    });

    await booking.save();

    res.status(201).json({
      message: "Tickets booked successfully",
      booking: booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/my", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({
      customer: req.customerId,
    })
      .populate("movie", "id title genre rating price poster")
      .populate("customer", "name email");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      customer: req.customerId,
    })
      .populate("movie", "id title genre rating price poster")
      .populate("customer", "name email");

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { seats } = req.body;

    if (!seats || seats <= 0) {
      return res.status(400).json({
        message: "Number of seats must be greater than 0",
      });
    }

    const booking = await Booking.findOne({
      _id: req.params.id,
      customer: req.customerId,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    const movie = await Movie.findById(booking.movie);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    booking.seats = seats;
    booking.totalAmount = movie.price * seats;

    await booking.save();

    res.status(200).json({
      message: "Booking updated successfully",
      booking: booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      customer: req.customerId,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Booking cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
