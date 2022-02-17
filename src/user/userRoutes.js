const { Router } = require("express");
const { hashPassword } = require("../middleware");
const { addUser, logIn, findUser } = require("./userControllers");
const userRouter = Router();

// User routes
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", findUser);

// Login route
userRouter.post("/login", logIn);

module.exports = userRouter;
