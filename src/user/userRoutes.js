const { Router } = require("express");
const { hashPassword, decryptPassword, tokenCheck } = require("../middleware");
const {
	addUser,
	findUser,
	updateUser,
	deleteUser,
	login,
} = require("./userControllers");
const userRouter = Router();

// User routes
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", findUser);
userRouter.patch("/user", updateUser);
userRouter.delete("/user", deleteUser);

// Login route
userRouter.post("/login", decryptPassword, login);

// Token route
userRouter.get("/token", tokenCheck, login);

module.exports = userRouter;
