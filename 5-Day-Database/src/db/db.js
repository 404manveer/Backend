const mongoose = require('mongoose');

function mongooseToDb(){
    mongoose.connect('mongodb+srv://manveershah007:RXzdVymcOTK4L9qR@cohort-backend.ejipide.mongodb.net/cohort')
    .then(()=>{
        console.log("connnect to DB");
        
    })
}
module.exports = mongooseToDb;