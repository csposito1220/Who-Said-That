const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
});

module.exports = mongoose.model("Actor", actorsSchema);
