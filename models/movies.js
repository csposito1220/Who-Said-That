const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movies = [{ name: "Step Brothers" }];

const movieSchema = new Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("Movie", movieSchema);
