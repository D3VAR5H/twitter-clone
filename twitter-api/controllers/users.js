const express = require("express");
const User = require("../models/users");
const router = express.Router();

var jwt = require("jsonwebtoken");

exports.user_create = async (req, res, next) => {
	if (!req.body.name || !req.body.username || !req.body.password) {
		return res.status(400).send({
			success: false,
			message: "Please enter all the details",
		});
	}

	// create a new User
	let user = new User({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
	});

	// save user in the database.
	await user
		.save()
		.then((data) => {
			res.send({
				success: true,
				message: "User successfully created",
				data: data,
			});
		})
		.catch((err) => {
			res.status(500).send({
				success: false,
				message: err.message || "Some error occurred while creating the Signing Up.",
			});
		});
};

exports.user_login = async (req, res, next) => {
	if (!req.data.username || !req.data.password) {
		return res.status(400).send({
			success: false,
			message: "Please enter username and password",
		});
	}

	// fetch a particular user
	const user = await User.findOne({ username: req.data.username, password: req.data.password });

	if (user) {
		jwt.sign({ userID: user._id, username: user.username }, process.env.USER_ACCESS_KEY, (err, token) => {
			if (err) return res.sendStatus(500);
			res.setHeader("authorization", "Bearer " + token);
			res.status(200).json(token);
		});
	} else {
		res.json({ error: "user crediantials do not match" });
	}
};
