const { Router } = require("express");
const { hashPassword } = require("../middleware");
const { addUser } = require("./userControllers");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

module.exports = userRouter;
