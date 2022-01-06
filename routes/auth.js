var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.send(`<h1>AUTH page</h1>${__dirname}`);
});

router.get("/login", function (req, res, next) {
	res.render("login");
});

module.exports = router;
