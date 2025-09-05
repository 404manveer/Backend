require('dotenv').config()
const app = require("./src/app")
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require('./src/services/ai.service');

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "http://localhost:3001" } });

const chatdata =[]



io.on("connection", (socket) => {
  console.log('server connected');

  socket.on('disconnect',(socket)=>{
    console.log('server disconnected');
  });

  socket.on('ai-message',async (data)=>{

    chatdata.push({
      role:'user',
      parts:[{text:data}]
    })
    console.log('user msg>>>',data);
    
    const response = await generateResponse(chatdata);
    console.log("msg recived",response);
    
    chatdata.push({
      role:'model',
      parts:[{text:response}]
    })
    socket.emit('ai-message-response',response)
  })
  
});

httpServer.listen("3000",()=>{ 
    console.log("server running on port 3000");
    
})
