require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// handle JSON data
app.use(express.json());

// run express application
app.listen(port, () => {
	console.log(`Listening in port ${port}`);
});
