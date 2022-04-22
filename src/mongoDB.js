const mongoose = require("mongoose");

class Mongodb {
	constructor() {
		this.createConnection();
	}
	createConnection() {
		mongoose.connect(`mongodb://localhost:27017/test`);
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
