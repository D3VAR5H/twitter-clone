const express = require("express");
const router = express.Router();

const authenticateMiddleware = require("../middleware/authenticateUser");

const user_controller = require("../controllers/users");

router.get("/", authenticateMiddleware, user_controller.user);
router.get("/login", user_controller.user_login);
router.get("/signup", user_controller.user_create);
router.get("/:userId", user_controller.user_fetch);

// router.get("/", function (req, res, next) {
// 	res.json({ user: req.user });
// });

module.exports = router;
