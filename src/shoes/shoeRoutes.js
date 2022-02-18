const { Router } = require("express");
const {
	addShoe,
	findShoe,
	updateShoe,
	deleteShoe,
} = require("./shoeControllers");
const shoeRouter = Router();

// Shoe routes
shoeRouter.post("/shoe", addShoe);
shoeRouter.get("/shoe", findShoe);
shoeRouter.patch("/shoe", updateShoe);
shoeRouter.delete("/shoe", deleteShoe);

module.exports = shoeRouter;
