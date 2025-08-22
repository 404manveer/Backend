const express = require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')

async function authmiddleware(req,res,next) {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({
                msg:"unauthorized access,Please try again!"
            })
        }

       try {

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findOne({
            _id:decoded.id
        })
        console.log(user);
        req.user=user
        next();
        
       } catch (error) {
        return res.status(401).json({
            msg:'unauthorized access!,login again'
        })
        
       }
}

module.exports ={
    authmiddleware
}
