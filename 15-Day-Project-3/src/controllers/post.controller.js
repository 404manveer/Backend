const postmodel = require('../model/post.model')
const genratecaption = require("../services/ai.service")

async function createpost(req,res) {
  const file =req.file
  console.log("img buffer>>>",file);

  const base64image = Buffer.from(file.buffer).toString('base64')
  console.log(base64image);
  

  const caption = await genratecaption(base64image);
  return res.status(200).json({
     msg:"cation created succesfully",
    caption:caption

  })
  
  
  
}

module.exports ={
 
  createpost
}