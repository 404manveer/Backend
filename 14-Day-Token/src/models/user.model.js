const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,  // ❌ This is incorrect!
    password: String,
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel; 