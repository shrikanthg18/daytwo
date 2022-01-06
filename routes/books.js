var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.send(`<h1>Welcome to books!</h1>`);
});

router.get("/info", function (req, res, next) {
	res.status(200).json({
		id: 1,
		name: "Harry Potter",
		author: "J.K. Rowling",
	});
});

module.exports = router;
