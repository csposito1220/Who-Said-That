const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  actor: { type: Schema.Types.ObjectId, ref: "Actor" },
  quote: { type: String },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});

module.exports = mongoose.model("Quote", quoteSchema);
