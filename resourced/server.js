const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.get("/", (req,res) => res.json({msg: "hey there"}));

//resource routes
app.use('/api/resources', require('./routes/resources'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started port ${PORT}`));