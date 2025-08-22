require('dotenv').config()
const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect(process.env.MONGOOSE_URL)
    .then(()=>{
        console.log("mongoose connected");
        
    })
    .catch((err)=>{
        console.log(err);
        
    }
    )
}



module.exports = connectDB