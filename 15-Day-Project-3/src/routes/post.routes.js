const express = require('express')
const route = express.Router();
const {authmiddleware} = require('../middleware/auth.middleware')


route.post('/',authmiddleware,(req,res)=>{
    return res.json({
        msg:'kjs '
    })
})





 module.exports=route;