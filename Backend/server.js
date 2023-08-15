const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {});
    
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Monogodb connection Success!");
})

const itemRouter = require("./routes/items.js");

app.use("/item", itemRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})