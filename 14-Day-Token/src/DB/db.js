require('dotenv').config();
const mongoose = require("mongoose")

function connectDB() {
    mongoose.connect(process.env.MONGOOSE_URL)
.then(() => {
    console.log("connected to mongooseDB");
})
.catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
})

}
module.exports = connectDB;