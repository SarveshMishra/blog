const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const post = require("./post");
const connectToDB = require("./mongoDB");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.post("/post", async (req, res) => {
	try {
		let posts = req.body;
		console.log(posts);
		await post.insertMany([posts]);
		res.json({ status: "success" });
	} catch (error) {
		console.log(error);
		res.sendStatus(500).json(error);
	}
});
app.get("/post", async (req, res) => { 
	try {
		let posts = await post.find({});
		res.json(posts);
	} catch (error) {
		console.log(error);
		res.sendStatus(500).json(error);
	}
});
app.listen(process.env.PORT || 3001, () => {
	new connectToDB();
	console.log("Server is running on port 3000");
});
