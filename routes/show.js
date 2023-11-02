const express = require("express");
const router = express.Router();

const quotesCtrl = require("../controllers/quotes");

router.get("/", quotesCtrl.index);

module.exports = router;
