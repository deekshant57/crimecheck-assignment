require("dotenv").config();
const mongoose = require("mongoose");

// Create a connection with database

module.exports = () => mongoose.connect("mongodb://127.0.0.1:27017/");
