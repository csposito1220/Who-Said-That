const Quote = require("../models/quotes");
const Actor = require("../models/actors");

module.exports = {
  new: newQuote,
  create,
};

async function newQuote(req, res) {
  res.render("search/new", { title: "Add Quote" });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const quote = await Quote.create(req.body);
    res.redirect(`/search/${quote._id}`);
  } catch (err) {
    console.log(err);
    res.render("search/new", { errorMsg: err.message });
  }
}
