const Shoe = require("./shoeModel");

// ADD SHOE
exports.addShoe = async (req, res) => {
	try {
		const newShoe = await Shoe.create(req.body);
		res.status(200).send({ shoe: newShoe });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// FIND SHOES
exports.findShoe = async (req, res) => {
	try {
		if (req.body.name) {
			const getShoe = await Shoe.find({ name: req.body.name });
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.brand) {
			const getShoe = await Shoe.find({ brand: req.body.brand });
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.size) {
			const getShoe = await Shoe.find({ size: req.body.size });
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.price) {
			const getShoe = await Shoe.find({ price: req.body.price });
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.seller) {
			const getShoe = await Shoe.find({ seller: req.body.seller });
			res.status(200).send({ shoe: getShoe });
		} else {
			const getShoe = await Shoe.find({});
			res.status(200).send({ shoe: getShoe });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// UPDATE SHOE
exports.updateShoe = async (req, res) => {
	try {
		if (req.body.newname) {
			const getShoe = await Shoe.updateOne(
				{ name: req.body.name, seller: req.body.seller },
				{ $set: { name: req.body.newname } }
			);
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.newbrand) {
			const getShoe = await Shoe.updateOne(
				{ name: req.body.name, seller: req.body.seller },
				{ $set: { brand: req.body.newbrand } }
			);
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.newsize) {
			const getShoe = await Shoe.updateOne(
				{ name: req.body.name, seller: req.body.seller },
				{ $set: { size: req.body.newsize } }
			);
			res.status(200).send({ shoe: getShoe });
		} else if (req.body.newprice) {
			const getShoe = await Shoe.updateOne(
				{ name: req.body.name, seller: req.body.seller },
				{ $set: { price: req.body.newprice } }
			);
			res.status(200).send({ shoe: getShoe });
		} else {
			res.status(400).send({ message: "Invalid request" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// DELETE SHOE
exports.deleteShoe = async (req, res) => {
	try {
		const eraseShoe = await Shoe.deleteOne({
			name: req.body.name,
			seller: req.body.seller,
		});
		res.status(200).send({ shoe: eraseShoe });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};
