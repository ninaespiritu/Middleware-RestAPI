const bcrypt = require("bcryptjs");

exports.hashPassword = async (req, res, next) => {
	try {
		// const tempPassword = req.body.password;
		// const hashedPassword = await bcrypt.hash(tempPassword, 8);
		// req.body.password = hashedPassword;
		req.body.password = await bcrypt.hash(req.body.password, 8);
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// exports.decryptPassword = async (req, res, next) => {
// 	try {
// 		const infoUser = await User.findOne({ email: req.body.email });
// 		const comparePassword = await bcrypt.compare(req.body.password, infoUser.password);
// 		if (comparePassword) {
// 			res.status(200).send({ message: "You have successfully logged in"})
// 			req.User = infoUser;
// 			console.log("You have successfully logged in.")
// 			next();
// 		} else {
// 			res.status(500).send({ message: "Your password does not match. Please try again." });
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({ err: error.message });
// 	}
// };
