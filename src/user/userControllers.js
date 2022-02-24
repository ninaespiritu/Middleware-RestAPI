const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./userModel");
const Shoe = require("../shoes/shoeModel");

// ADD USER
exports.addUser = async (req, res) => {
	try {
		const newUser = await User.create({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
			shoes: await Shoe.find({ seller: `${req.body.username}` }),
		});
		const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET);
		res.status(200).send({
			message: "Successfully created user",
			user: newUser,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// FIND USER
exports.findUser = async (req, res) => {
	try {
		if (req.body.email) {
			const getUser = await User.findOne({ email: req.body.email });
			const getShoe = await Shoe.find({ seller: getUser.username });
			res.status(200).send({ user: getUser, movies: getShoe });
		} else if (req.body.username) {
			const getUser = await User.findOne({ username: req.body.username });
			const getShoe = await Shoe.find({ seller: getUser.username });
			res.status(200).send({ user: getUser, movies: getShoe });
		} else {
			const getUser = await User.find({});
			res.status(200).send({ user: getUser });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// UPDATE USER
exports.updateUser = async (req, res) => {
	try {
		if (req.body.newemail) {
			const amendUser = await User.updateOne(
				{ email: req.body.email },
				{ $set: { email: req.body.newemail } }
			);
			res.status(200).send({
				amendUser,
				message: `User email updated to: ${req.body.newemail}`,
			});
		} else if (req.body.newusername) {
			const amendUser = await User.updateOne(
				{ username: req.body.username },
				{ $set: { username: req.body.newusername } }
			);
			res.status(200).send({
				amendUser,
				message: `User username updated to: ${req.body.newusername}`,
			});
		} else {
			res.status(400).send({ message: "Invalid request" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// DELETE USER
exports.deleteUser = async (req, res) => {
	try {
		const eraseUser = await User.deleteOne({
			// email: req.body.email,
			username: req.body.username,
			// password: req.body.password,
		});
		res.status(200).send({
			eraseUser,
			message: `User successfully deleted`,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// LOGGING IN
exports.login = async (req, res) => {
	try {
		res.status(200).send({ user: req.user });
		// const findUser = await User.findOne({ email: req.body.email });
		// if (findUser) {
		// 	const checkPassword = await bcrypt.compare(
		// 		req.body.password,
		// 		findUser.password
		// 	);
		// 	if (checkPassword) {
		// 		res.status(200).send({
		// 			message: "You have successfully logged in!",
		// 		});
		// 	} else {
		// 		res.status(400).send({
		// 			message: "Incorrect password. Please try again.",
		// 		});
		// 	}
		// } else {
		// 	res.status(400).send({ message: "User does not exist." });
		// }
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};
