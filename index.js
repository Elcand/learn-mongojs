const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const movie = new Movie({
  title: "The Shawshank Redemption",
  year: 1994,
  score: 9.3,
  director: "Frank Darabont",
}).save();

// Movie.insertMany([
//   {
//     title: "The Godfather",
//     year: 1972,
//     score: 9.2,
//     director: "Francis Ford Coppola",
//   },
//   {
//     title: "The Dark Knight",
//     year: 2008,
//     score: 9,
//     director: "Christopher Nolan",
//   },
//   {
//     title: "Inception",
//     year: 2010,
//     score: 8.8,
//     director: "Christopher Nolan",
//   },
//   {
//     title: "Interstellar",
//     year: 2014,
//     score: 8.6,
//     director: "Christopher Nolan",
//   },
// ])
//   .then(() => {
//     console.log("Data inserted successfully");
//   })
//   .catch((error) => {
//     console.error("Error inserting data:", error);
//   });

Movie.deleteOne({ title: "The Dark Knight" })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error deleting movie:", error);
  });

console.log(movie);
