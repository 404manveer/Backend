const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/register', async (req,res)=>{
    const{username,password} = req.body;
    const user = await userModel.create({
        username,
        password
    })
    res.status(201).json({
        msg:'user created successfully',
        user:user,                                                  
    })

})

router.post('/login', async (req,res)=>{
    const {username,password} = req.body
    const user = await userModel.findOne({
        username:username
    })
    if(!user){
        return res.status(401).json({
            msg:"User not found"
        })
    }
     const ispassword = password ==user.password
     if(!ispassword){
        return res.status(401).json({
            msg:'password is wrong'
        })
     }else{
        return res.status(200).json({
            msg:'login succesfull',
            user
        })
     }


})











module.exports = router;