const express = require("express")
const mongooseToDb = require('./src/db/db')

mongooseToDb()
const server = express()
server.get('/notes',(req,res)=>{
    res.json({msg:'this is notes page'})
})

server.listen(3200,(req,res)=>{
    console.log("Server is running on 3200 port.");
    
})