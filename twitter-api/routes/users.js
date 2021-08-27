var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.json({ user: req.user });
});

// router.get("/", function (req, res, next) {
// 	res.json({ user: req.user });
// });

module.exports = router;
