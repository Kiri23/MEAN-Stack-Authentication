'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/databse');
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
  const username = req.body.username;
  const password = req.body.password;

  // Get the user to authenticate
  User.getUserByUsername(username,(err,user) => {
    if (err) throw err;
    if(!user){
      return res.json({success:false,msg:'User not found'});
    }
    // Compare the Password
    User.comparePassword(password,user.password,(err,isMatch) => {
      if (err) throw err;
      // if the password match
      if(isMatch){
        // construct the token- it has option
        const token = jwt.sign(user,config.secret,{
          expiresIn:1200 // 20 minutes
        });
        // Send the reponse in Json Format
        res.json({success:true,
          token:'JWT '+token,
          user:{
            id:user._id,
            name:user.name,
            username:user.username,
            email:user.email
          }
        });
      }
      // if no match
      else {
        return res.json({success:false,msg:'Wrong password'});
      }

    });


  })

});

// protect route with our Authentication, Our Token
// Profile Route
router.get('/profile',passport.authenticate('jwt',{session:false}),(req, res,next) => {
  res.json({user:req.user});
});

router.get('/ping', (req, res) => {
    res.send('pong');
});


module.exports = router;
