const { Router } = require("express");
const { hashPassword } = require("../middleware");
const { addUser, logIn, findUser, updateUser } = require("./userControllers");
const userRouter = Router();

// User routes
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", findUser);
userRouter.patch("/user", updateUser);

// Login route
userRouter.post("/login", logIn);

module.exports = userRouter;
