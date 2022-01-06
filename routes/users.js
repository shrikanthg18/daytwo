var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/hello", function (req, res, next) {
  res.send(`<h1>Hello!</h1>`);
});

router.get("/info", function (req, res, next) {
  res.status(200).json({ data: "Welcome to Freight Deck!" });
});

module.exports = router;
