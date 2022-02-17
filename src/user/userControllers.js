const bcrypt = require("bcryptjs/dist/bcrypt");
const req = require("express/lib/request");
const User = require("./userModel");

// ADD USER
exports.addUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(200).send({ user: newUser });
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
			res.status(200).send({ user: getUser });
		} else if (req.body.username) {
			const getUser = await User.findOne({ username: req.body.username });
			res.status(200).send({ user: getUser });
		} else {
			res.status(400).send({ message: "Invalid request" });
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
				updateUser: `User email updated to: ${req.body.newemail}`,
			});
		} else if (req.body.newusername) {
			const amendUser = await User.updateOne(
				{ username: req.body.username },
				{ $set: { username: req.body.newusername } }
			);
			res.status(200).send({
				amendUser,
				updateUser: `User username updated to: ${req.body.newusername}`,
			});
		} else {
			res.status(400).send({ message: "Invalid request" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// LOGGING IN
exports.logIn = async (req, res) => {
	try {
		const findUser = await User.findOne({ email: req.body.email });
		if (findUser) {
			const checkPassword = await bcrypt.compare(
				req.body.password,
				findUser.password
			);
			if (checkPassword) {
				res.status(200).send({
					message: "You have successfully logged in!",
				});
			} else {
				res.status(400).send({
					message: "Incorrect password. Please try again.",
				});
			}
		} else {
			res.status(400).send({ message: "User does not exist." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};
