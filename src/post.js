const mongoose = require("mongoose");
const post = mongoose.Schema({
	content: String,
});

module.exports = mongoose.model("post", post);
