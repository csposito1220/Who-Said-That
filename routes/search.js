const express = require("express");
const router = express.Router();

const searchCtrl = require("../controllers/search");

router.get("/", searchCtrl.index);

router.get("/quote", searchCtrl.searchedQuote);

module.exports = router;
