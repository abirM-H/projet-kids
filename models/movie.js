const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  url: { type: String },
  image: { type: String },
  categories: { type: String },
  language: { type: String },
  age: { type: Array },
  description: { type: String }
});

module.exports = mv = mongoose.model("movie", movieSchema);
