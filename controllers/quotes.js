const Quote = require("../models/quotes");
const Actor = require("../models/actors");
const Movie = require("../models/movies");

module.exports = {
  index,
  details,
  new: newQuote,
  create,
  edit,
  update,
  delete: deleteQuote,
  getOne,
  getAll,
};

async function index(req, res) {
  const quotes = await Quote.find({}).populate("actor").populate("movie");
  res.render("search/show", { title: "Recent Searches", quotes });
}

async function details(req, res) {
  const quote = await Quote.findById(req.params.id)
    .populate("actor")
    .populate("movie");
  res.render("search/details", { title: "Quote Detail", quote });
}

async function newQuote(req, res) {
  res.render("search/new", { title: "Add Quote" });
}

async function create(req, res) {
  try {
    const { quote: quoteText, title, name } = req.body;
    const actor = new Actor({ name });
    await actor.save();
    const movie = new Movie({ title });
    await movie.save();
    const quote = new Quote({
      quote: quoteText,
      actor: actor._id,
      movie: movie._id,
    });
    await quote.save();
    res.redirect("/show");
  } catch (err) {
    console.log(err);
    res.render("search/new", { errorMsg: err.message });
  }
}

async function update(req, res) {
  const quote = await Quote.findByIdAndUpdate(req.params.id, {
    quote: req.body.quote,
  })
    .populate("actor")
    .populate("movie");
  const actor = await Actor.findByIdAndUpdate(quote.actor._id, {
    name: req.body.actor,
  });
  const movie = await Movie.findByIdAndUpdate(quote.movie._id, {
    title: req.body.movie,
  });
  console.log(req.body);
  res.redirect(`/show/${req.params.id}`);
}

async function edit(req, res) {
  try {
    const quote = await Quote.findById(req.params.id)
      .populate("actor")
      .populate("movie");
    // req.body.user = req.user._id;
    res.render("search/edit", {
      title: "Edit Quote",
      quote,
    });
  } catch (err) {
    console.log(err);
  }
}

async function deleteQuote(req, res) {
  const quote = await Quote.findById(req.params.id);
  await quote.deleteOne();
  res.redirect("/show");
}

function getOne(id) {
  id = parseInt(id);
  return quotes.find((quote) => quote.id === id);
}

function getAll() {
  return quotes;
}
