const Movie = require("../models/movies");
const Actor = require("../models/actors");

module.exports = {
  index,
  showAll,
};

async function index(req, res) {
  res.render("search/index", { title: "Search" });
}

async function showAll(req, res) {
  const search = await Search.findById(req.params.id).populate("quote");
  res.render("search/show");
}
