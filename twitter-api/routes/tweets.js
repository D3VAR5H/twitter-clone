const express = require("express");
const router = express.Router();

const authenticateMiddleware = require("../middleware/authenticateUser");

const tweet_controller = require("../controllers/tweets");

router.get("/", tweet_controller.tweet_fetch_all);
router.post("/create", authenticateMiddleware, tweet_controller.tweet_create);
router.get("/:tweetId", tweet_controller.tweet_fetch_particular);
router.get("/:userId", tweet_controller.tweet_fetch_by_user);

module.exports = router;
