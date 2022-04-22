const mongoose = require("mongoose");
const user = mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	gender: String,
    ip_address: String,
    
});

module.exports = mongoose.model("user", user);