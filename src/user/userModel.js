const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Shoe = require("../shoes/shoeModel");

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
		validate: [isEmail, "incorrect email format"],
	},
	password: {
		type: String,
		required: true,
	},
	shoes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: `${Shoe}`,
		unique: false,
	}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
