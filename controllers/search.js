const Movie = require("../models/movies");
const Actor = require("../models/actors");

module.exports = {
  index,
  searchedQuote,
  showAll,
};

function index(req, res) {
  res.render("search/index", { title: "Search" });
}

function searchedQuote(req, res) {
  res.render("search/quote");
}

async function showAll(req, res) {
  const search = await Search.findById(req.params.id).populate("quote");
  res.render("search/show");
}
