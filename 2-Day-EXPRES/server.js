
const express = require('express')
const server = express()

server.get('/home',(req,res)=>{
    res.send('this is home page')                                                                                       

})

server.get('/about',(req,res)=>{
    res.send('this is about page')
    
})

server.use(express.json())
const notes =[]

server.post('/Notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)

    res.json({
        message:"Notes are created succesfully", 
        notes:notes
    })
    
})
server.listen(3000,()=>{ 
    console.log('Server is running')
    
})