const express = require('express')
const route = express.Router();
const {authmiddleware} = require('../middleware/auth.middleware')
const multer = require('multer')
const {createpost} = require("../controllers/post.controller")
 
const upload = multer({storage:multer.memoryStorage()})


route.post('/',authmiddleware,upload.single('image'),createpost)





 module.exports=route;