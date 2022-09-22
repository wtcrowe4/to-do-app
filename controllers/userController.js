const User = require('../models/userModel'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

//Create user
const createUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = new User({
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