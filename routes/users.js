'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//aget6 shortcut for app.get

// Register
// cause whe're in the users file is users/register
router.post('/register', (req, res,next) => {
  // User Object Retriev user Properties from Form
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
// Add User to mongoDb
  User.addUser(newUser,(err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    }else{ // addUser to the Database
      res.json({success:true,msg:'User Registered',user:newUser});
    }
  });
// End add User logic

})

// Authenticate Route
router.post('/authenticate', (req, res,next) => {
  res.send('Authenticate');

});

// protect route with our Authentication, Our Token
// Profile Route
router.get('/profile', (req, res,next) => {
  res.send('Profile');
});


module.exports = router;
