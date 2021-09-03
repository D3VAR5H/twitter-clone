const Tweet = require("../models/tweets");

exports.tweet_create = async (req, res, next) => {
	if (!req.body.message) {
		return res.status(400).send({
			message: "Please enter some message",
		});
	}

	// create a new tweet
	let tweet = new Tweet({
		message: req.body.message,
		user: req.user._id,
	});

	console.log(tweet);

	// save tweet in the database.
	await tweet
		.save()
		.then((data) => {
			res.send({
				message: "Tweet successfully created",
				data: data,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the tweet.",
			});
		});
};

exports.tweet_fetch_particular = async (req, res, next) => {
	if (!req.params.tweetId) {
		return res.status(400).send({
			message: "Please send a tweet ID",
		});
	}

	// fetch a particular tweet
	const tweet = await Tweet.findById(req.params.tweetId).populate("users", ["name", "username"]);

	// save tweet in the database.
	return res.status(200).json({ tweet });
};

exports.tweet_fetch_all = async (req, res, next) => {
	// fetch a particular tweet
	const tweets = await Tweet.find().populate("user", ["name", "username"]);

	// save tweet in the database.
	return res.status(200).json({ tweets });
};

exports.tweet_fetch_by_user = async (req, res, next) => {
	if (!req.params.userId) {
		return res.status(400).send({
			message: "Please send a user ID",
		});
	}

	// fetch tweets of a particular user
	const tweets = await Tweet.find({ user: req.params.userId }).populate("user", ["name", "username"]);

	// save tweet in the database.
	return res.status(200).json({ tweets });
};
