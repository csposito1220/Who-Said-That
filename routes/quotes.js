const express = require("express");
const router = express.Router();

const quotesCtrl = require("../controllers/quotes");

router.get("/", quotesCtrl.index);

router.get("/new", quotesCtrl.new);

router.get("/:id", quotesCtrl.details);

router.post("/", quotesCtrl.create);

router.delete("/:id", quotesCtrl.delete);

module.exports = router;
