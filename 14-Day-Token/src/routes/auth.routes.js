const exprees = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');   

const router = exprees.Router();

router.post("/register", async (req,res)=>{
    const {user,password} =req.body;
    const users = await userModel.create({
        user: user,
        password: password
    });
    const token = jwt.sign({
        id: users._id,
    }, process.env.JWT_SECRET,)

res.cookie("token",token);

    if(!user){
        return res.status(400).json({
            msg: "User registration failed"
        });
    }else{
        return res.status(201).json({
            msg: "User registered successfully",
            user: users,
        
        }); 
    }
})

router.get('/login',async (req, res) => {
    const {user,password} = req.body;

    const users = await userModel.findOne({user: user,  });
    if(!users){
        return res.status(401).json({
            msg: "User not found"
        });
    }

    const isPasswordValid = users.password === password;
    if(!isPasswordValid){  
        return res.status(401).json({
            msg: "Invalid password"
        });
    }
    const token = jwt.sign({
        id: users._id,
    }, process.env.JWT_SECRET,);
    res.cookie("token", token);

    res.status(200).json({
        msg: "User logged in successfully",
        user: users,
    });
})

router.get('/logout', (req, res) => {
    res.clearCookie("token");  
   return res.status(200).json({
        msg: "User logged out successfully"
    }); 
});

router.get('/user', async (req, res) => {
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({
            msg: "Unauthorized"
        });
    }

    try{
        const decoded  = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById({
            _id:decoded.id
        }).select("-password -__v"); // Exclude password and __v field
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            });
        }
        return res.status(200).json({
            msg: "User found",
            user: user
        })
    }catch(err){
        return res.status(401).json({
            msg: "Invalid token"
        });
    }

   
})



module.exports = router;
