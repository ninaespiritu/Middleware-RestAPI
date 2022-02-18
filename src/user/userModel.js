const req = require("express/lib/request");
const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: [isEmail, "incorrect email format"]
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
