const { Router } = require("express");
const { hashPassword } = require("../middleware");
const { addUser, logIn } = require("./userControllers");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", logIn)

module.exports = userRouter;
