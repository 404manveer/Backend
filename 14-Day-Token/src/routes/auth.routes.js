const exprees = require('express');
const userModel = require('../models/user.model');   

const router = exprees.Router();

router.post("/register", async (req,res)=>{
    const {user,password} =req.body;
    const users = await userModel.create({
        user: user,
        password: password
    });

    if(!user){
        return res.status(400).json({
            msg: "User registration failed"
        });
    }else{
        return res.status(201).json({
            msg: "User registered successfully",
            user: users
        }); 
    }
})

module.exports = router;
