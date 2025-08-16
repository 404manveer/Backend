const express = require("express");
const cors = require('cors');
const songsRoutes = require('./routes/song.routes');


const app = express()
app.use(cors());
app.use(express.json())

app.use('/',songsRoutes);

module.exports = app;