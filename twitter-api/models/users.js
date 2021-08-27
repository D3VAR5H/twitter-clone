const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: { type: String, required: true, max: 100 },
	username: { type: String, required: true, max: 100, unique: true },
	password: { type: Number, required: true },
});

module.exports = mongoose.model("User", UserSchema);
