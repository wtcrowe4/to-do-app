//Dependancies
var express = require('express');
var app = express();
require('dotenv').config();
var mongoose = require('mongoose');
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';
var port = process.env.DB_PORT || 8080;


//Database
mongoose.connect(mongoURI, () => console.log(`MongoDB Connected at ${mongoURI}`));

//Middleware
app.use(express.json());


//Routes




app.listen(port, () => console.log(`Server is running on port ${port}`));