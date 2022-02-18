const mongoose = require("mongoose");

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
	},
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
