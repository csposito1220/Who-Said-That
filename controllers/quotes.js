const Quote = require("../models/quotes");
const Actor = require("../models/actors");
const Movie = require("../models/movies");

module.exports = {
  index,
  details,
  new: newQuote,
  create,
};

function index(req, res) {
  res.render("search/show", { title: "Recent Searches" });
}

async function details(req, res) {
  const quote = await Quote.findById(req.params.id).populate("actor");
  const actor = await Actor.find({ _id: { $nin: quote.actor } }).sort("name");
  res.render("movies/show", { title: "Quote Detail", quote, actor });
}

async function newQuote(req, res) {
  res.render("search/new", { title: "Add Quote" });
}

async function create(req, res) {
  try {
    const quote = await Quote.create(req.body);
    const actor = await Actor.create(req.body);
    const movie = await Movie.create(req.body);
    console.log(quote);
    console.log(actor);
    console.log(movie);
    res.redirect("/show");
  } catch (err) {
    console.log(err);
    res.render("search/new", { errorMsg: err.message });
  }
}
