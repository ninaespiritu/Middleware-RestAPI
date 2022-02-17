const { Router } = require("express");
const { hashPassword } = require("../middleware");
const {
	addUser,
	findUser,
	updateUser,
	deleteUser,
	logIn,
} = require("./userControllers");
const userRouter = Router();

// User routes
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", findUser);
userRouter.patch("/user", updateUser);
userRouter.delete("/user", deleteUser);

// Login route
userRouter.post("/login", logIn);

module.exports = userRouter;
