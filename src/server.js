require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRoutes");
const shoeRouter = require("./shoes/shoeRoutes");
const app = express();
const port = process.env.PORT || 5001;

// handle JSON data
app.use(express.json());

// user routes
app.use(userRouter);

// shoe routes
app.use(shoeRouter);

// run express application
app.listen(port, () => {
	console.log(`Listening in port ${port}`);
});
