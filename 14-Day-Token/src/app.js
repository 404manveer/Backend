
const exprees = require('express');
const authrouter = require("./routes/auth.routes")
const app = exprees();


app.use(exprees.json());
app.use("/auth", authrouter);











module.exports = app;