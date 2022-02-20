const mongoose = require("mongoose");
// const User = require("../user/userModel");

const shoeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: false,
		default: "Not specified",
	},
	size: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	seller: {
		type: String,
		required: true,
		// type: mongoose.Schema.Types.ObjectId,
		// ref: `${User}`,
	},
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
