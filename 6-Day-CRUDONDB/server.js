const express = require('express')
const mongooseToDb = require('./src/db/db')
const notesModel = require ('./src/models/notes.model')

mongooseToDb()
const server = express( )

server.use(express.json())
server.post('/Notes', async (req,res)=>{
    const {title,content} = req.body
   await notesModel.create({
        title,content
    })
    res.json({
        msg:'notes created succesfully!!'
    })
})

server.get('/Notes',async (req,res)=>{
    const notes =  await notesModel.find( )

    res.json({
        msg:"Notes fetch succesfully",
        notes:notes,
        
    })
})

server.delete('/Notes/:id', async (req,res)=>{
    const noteid = req.params.id
   await notesModel.findOneAndDelete({
        _id:noteid   
    })
    res.json({
        msg:'Notes deleted succesfully!!'
    })
})

server.patch("/Notes/:id",async (req,res)=>{
    const id= req.params.id;
    const {title} = req.body;
    await notesModel.findOneAndUpdate({
     _id:id
    },{
        title:title
    })

    res.json({
        msg:"Note is update is succesfully!!"
    })
})

server.listen(3200,(req,res)=>{  
    console.log("Server running on port 3200");
    
})