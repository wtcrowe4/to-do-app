//Create user controller

var User = require('../models/userModel'); 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config');

//Create user
const createUser = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var user = new User({
        username: username,
        password: password
    });
    user.save(function(err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(user);
        }
    });
}

//Login user