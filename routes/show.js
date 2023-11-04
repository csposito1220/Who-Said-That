const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("../config/ensureLoggedIn");

const quotesCtrl = require("../controllers/quotes");

router.get("/", quotesCtrl.index);

router.get("/new", quotesCtrl.new);

router.get("/:id", quotesCtrl.details);

router.get("/:id/edit", ensureLoggedIn, quotesCtrl.edit);

router.put("/:id", ensureLoggedIn, quotesCtrl.update);

router.post("/", ensureLoggedIn, quotesCtrl.create);

router.delete("/:id", ensureLoggedIn, quotesCtrl.delete);

module.exports = router;
