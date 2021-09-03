// Set up mongoose connection
const mongoose = require("mongoose");

require("dotenv").config();

let database_url = "mongodb+srv://twitter-clone:twitterClone@twitter.u2k1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connecting to the database
mongoose
	.connect(database_url, {
		keepAlive: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now...", err);
		process.exit();
	});

module.exports = mongoose.connection;
