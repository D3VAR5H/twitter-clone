const express = require("express");
const Tweet = require("../models/tweets");
const router = express.Router();

exports.tweet_create = async (req, res, next) => {
	if (!req.body.message) {
		return res.status(400).send({
			success: false,
			message: "Please enter some message",
		});
	}

	// create a new tweet
	let tweet = new Tweet({
		message: req.body.message,
		user: req.user._id,
	});

	// save tweet in the database.
	await tweet
		.save()
		.then((data) => {
			res.send({
				success: true,
				message: "Tweet successfully created",
				data: data,
			});
		})
		.catch((err) => {
			res.status(500).send({
				success: false,
				message: err.message || "Some error occurred while creating the tweet.",
			});
		});
};

exports.tweet_fetch_particular = async (req, res, next) => {
	if (!req.params.tweetId) {
		return res.status(400).send({
			success: false,
			message: "Please send a tweet ID",
		});
	}

	// fetch a particular tweet
	const tweet = await Tweet.findById(req.params.tweetId).populate("user", ["name", "username"]);

	// save tweet in the database.
	return res.json({ tweet });
};

exports.tweet_fetch_all = async (req, res, next) => {
	// fetch a particular tweet
	const tweets = await Tweet.find().populate("user", ["name", "username"]);

	// save tweet in the database.
	return res.json({ tweets });
};

exports.tweet_fetch_by_user = async (req, res, next) => {
	if (!req.params.userId) {
		return res.status(400).send({
			success: false,
			message: "Please send a user ID",
		});
	}

	// fetch tweets of a particular user
	const tweets = await Tweet.find({ user: req.params.userId }).populate("user", ["name", "username"]);

	// save tweet in the database.
	return res.json({ tweets });
};
