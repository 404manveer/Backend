const userModel = require('../model/user.model')
const brcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function register(req,res) {
     const {username,password} = req.body;
    if(!username|| !password){
        return res.status(404).json({
            msg:'username and password is required'
        })
    }

    const existingUser = await userModel.findOne({
        username

    })

    if(existingUser){
        return res.status(409).json({
            msg:'user already exist'
        })
    }
    const hashpassword =  await brcrypt.hash(password,10)
    const user =  await userModel.create({
        username,password:hashpassword
    })
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    return res.status(200).json({
        msg:'user is created',
        user
             

    })




}

async function login(req,res) {
    const {user,password} =req.body
    const isuserExist = await userModel.findOne({
        user
    })
    if(!isuserExist){
        return res.status(404).json({
            msg:"user not found!"
        })
    }

    const isvaildpassword = brcrypt.compare(password,isuserExist.password);
    if(!isvaildpassword){
        return res.status(409).json({
            msg:'Invaild password,please try again!'
        })
    }
    const token = jwt.sign({
        id:isuserExist._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    return res.status(200).json({
        msg:"you are logined.",
        user

    })
}

module.exports ={
    register,
    login
}