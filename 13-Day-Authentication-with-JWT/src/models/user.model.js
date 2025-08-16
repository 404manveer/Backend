const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;