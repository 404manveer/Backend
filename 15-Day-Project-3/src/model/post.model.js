const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    image:String,
    caption:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})

const postmodel= new mongoose.model('post',postSchema)

module.exports = postmodel