require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("./models/Movie");

const movies = [
  {
    id: 1,
    title: "Avengers: Doomsday",
    genre: "Action",
    rating: 4.8,
    price: 250,
    poster:
      "https://image.tmdb.org/t/p/original/cWXtJhrlruF8CeYuaBGE8vdj3Q9.jpg",
  },
  {
    id: 2,
    title: "Dune: Messiah",
    genre: "Sci-Fi",
    rating: 4.7,
    price: 300,
    poster:
      "https://image.tmdb.org/t/p/original/fsttvmDGV5Z7iBvA7E3p5CoP8MW.jpg",
  },
  {
    id: 3,
    title: "Spider-Man: Brand New Day",
    genre: "Action",
    rating: 4.9,
    price: 280,
    poster:
      "https://image.tmdb.org/t/p/original/jYELt7NFLc1eiOdEC1zmkeCrlZo.jpg",
  },
  {
    id: 4,
    title: "The Odyssey",
    genre: "Adventure",
    rating: 4.6,
    price: 220,
    poster:
      "https://image.tmdb.org/t/p/original/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  },
];

async function insertMovies() {
  await mongoose.connect(process.env.MONGO_URI);

  await Movie.deleteMany();

  await Movie.insertMany(movies);

  console.log("Movies inserted successfully");

  mongoose.connection.close();
}

insertMovies();
