const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = Schema({
  actor: { type: Schema.Types.ObjectId, ref: "Actor" },
  quote: { type: String },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});

const Quote = mongoose.model("Quote", quoteSchema);
