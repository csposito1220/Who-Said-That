const express = require("express");
const router = express.Router();

const quotesCtrl = require("../controllers/quotes");

router.get("/", quotesCtrl.index);

router.get("/new", quotesCtrl.new);

// router.get("/:id", quotesCtrl.show);

router.post("/", quotesCtrl.create);

module.exports = router;
