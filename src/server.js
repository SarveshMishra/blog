const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("./user");
const connectToDB = require("./mongoDB");

app.use(bodyParser.json());

app.get("/user", async (req, res) => {
	try {
		let users = await user.find({});
		res.send(users);
	} catch (error) {
		console.log(error);
		res.sendStatus(500).json(error);
	}
});

app.listen(3000, () => {
	new connectToDB();
	console.log("Server is running on port 3000");
});
