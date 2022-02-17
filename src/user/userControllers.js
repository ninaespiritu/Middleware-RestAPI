const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("./userModel");

exports.addUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(200).send({ user: newUser });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.logIn = async (req, res) => {
	try {
		const findUser = await User.findOne({ email: req.body.email });
		if (findUser) {
			const checkPassword = await bcrypt.compare(
				req.body.password,
				findUser.password
			);
			if (checkPassword) {
				res.status(200).send({ message: "You have successfully logged in!"})
			} else {
				res.status(400).send({ message: "Incorrect password. Please try again."})
			}
		}
		else {
			res.status(400).send({ message: "User does not exist."})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};
