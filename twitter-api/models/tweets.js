const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./users")

let TweetSchema = new Schema({
	message: { type: String, max: 140, required: true },
	createdDate: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

// Export the model
module.exports = mongoose.model("Tweet", TweetSchema);
