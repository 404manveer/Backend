const exprees = require('express')
const route = exprees.Router()
const {register,login} = require('../controllers/auth.controller')

route.post('/register', register)
route.get('/login',login)







module.exports=route;