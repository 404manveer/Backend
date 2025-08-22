const express = require("express");
const authRouter = require('./routes/auth.routes')
const postRouter =  require('./routes/post.routes')
const cookie = require('cookie-parser')

const app = express();

app.use(cookie())
app.use(express.json())
app.use('/auth',authRouter)
app.use('/api/posts',postRouter)















module.exports = app;