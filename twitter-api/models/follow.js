let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let FollowSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	followers: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
	following: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

module.exports = mongoose.model("Follow", FollowSchema);
