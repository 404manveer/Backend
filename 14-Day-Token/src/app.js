
const exprees = require('express');
const authrouter = require("./routes/auth.routes")
const cookieParser = require('cookie-parser');
const app = exprees();


app.use(exprees.json());
app.use(cookieParser());
app.use("/auth", authrouter);











module.exports = app;