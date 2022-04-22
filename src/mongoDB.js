const mongoose = require("mongoose");

class Mongodb {
	constructor() {
		this.createConnection();
	}
	createConnection() {
		mongoose.connect(
			`mongodb+srv://dbUser:Me%40Mongodb2021@cluster0.wz5cj.mongodb.net/users?retryWrites=true&w=majority`
		);
		mongoose.connection.on(
			"error",
			console.error.bind(console, "connection error:")
		);
		mongoose.connection.once("open", () => {
			console.log("MongoDB connected");
		});
	}
}

module.exports = Mongodb;
