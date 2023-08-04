const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

//configuring env
dotenv.config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connecting to DATABASE using ENV
const DATABASE_URL = 'mongodb://127.0.0.1:27017/subscribers';
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log(`connected to database ${DATABASE_URL}`))

// To start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
