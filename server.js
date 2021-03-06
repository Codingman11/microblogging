const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require("./routes/api/items");
const app = express();

app.use(bodyParser.json());


// DB config

const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected..."))
    .catch(err => console.log(err));


// Use routes

app.use("/api/items", items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("SERVER STARTED ON PORT ${port}"));