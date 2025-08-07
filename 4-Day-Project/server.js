const express = require('express');
const server = express()

server.get('/',(req,res)=>{
    res.send('this is / pages.Hello guys.')      
})
server.use(express.json())
const notes = []
server.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)

    res.json({
        msg:"Notes created succesfully",
        notes:notes
    }) 
})

server.get('/notes',(req,res)=>{
    res.json(notes)

})

server.delete('/notes/:ids',(req,res)=>{
    const id = req.params.ids
    delete notes[id]
    res.send({
        msg:'Notes Deleted successfully!'
    })
})

server.patch('/notes/:ids',(req,res)=>{
    const id = req.params.ids
    const {title} = req.body
    if(!notes[id])res.status(404).json({msg:"Notes not found!!"})
    notes[id].title= title
    res.json({
        msg:"Note update successfully!"
    })
})

server.listen(3200,()=>{
    console.log('Server is running on 3200;');
    
})