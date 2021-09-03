const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/users");
const Follow = require("../models/follow");

exports.user = async (req, res, next) => {
	// fetch a particular user
	const user = await User.findOne({ _id: req.user.userId });

	if (user) {
		res.status(200).json({ user });
	} else {
		res.status(404).json({ error: "No such User exists" });
	}
};

exports.user_create = async (req, res, next) => {
	if (!req.body.name || !req.body.username || !req.body.password) {
		return res.status(400).json({
			message: "Please enter all the details",
		});
	}

	// fetch a particular user
	const user = await User.findOne({ username: req.body.username });
	if (user) {
		return res.status(400).json({
			message: "This username is already used",
		});
	}

	if (req.body.password !== req.body.verify_password) {
		return res.status(400).json({
			message: "Please verify password entered are same",
		});
	}

	// hash password
	const salt = await bcrypt.genSalt(15);
	const hashed_password = await bcrypt.hash(req.body.password, salt);

	// create a new User
	const new_user = new User({
		name: req.body.name,
		username: req.body.username,
		password: hashed_password,
	});

	// save user in the database.
	await new_user
		.save()
		.then((data) => {
			res.json({
				message: "User successfully created",
				data: data,
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || "Some error occurred while creating the Signing Up.",
			});
		});
};

exports.user_login = async (req, res, next) => {
	if (!req.body.username || !req.body.password) {
		return res.status(400).json({ error: "Please enter username and password" });
	}

	// fetch a particular user
	const user = await User.findOne({ username: req.body.username });
	if (!user) {
		return res.status(400).json({ error: "No such user exist" });
	}

	const validated_password = await bcrypt.compare(req.body.password);
	if (!validated_password) {
		return res.status(400).json({ error: "Invalid credentials" });
	}

	jwt.sign({ userID: user._id, username: user.username }, process.env.USER_ACCESS_KEY, (err, token) => {
		if (err) return res.status(500).json({ err });
		res.setHeader("authorization", "Bearer " + token);
		return res.status(200).json({ token });
	});
};

exports.user_fetch = async (req, res, next) => {
	if (!req.params.userId) {
		return res.status(400).json({
			message: "Please send user id",
		});
	}

	// fetch a particular user
	const user = await User.findOne({ _id: req.data.userId });

	if (user) {
		res.status(200).json({ user });
	} else {
		res.status(404).json({ error: "No such User exists" });
	}
};

// exports.user_follow = async (req, res, next) => {
// 	if (!req.params.userId) {
// 		return res.status(400).json({
// 			success: false,
// 			message: "Please send user id to follow",
// 		});
// 	}

// 	// fetch a particular user
// 	const follow = new Follow();

// 	if (user) {
// 		res.status(200).json(user);
// 	} else {
// 		res.json({ error: "No such User exists" });
// 	}
// };
