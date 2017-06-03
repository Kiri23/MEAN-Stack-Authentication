// Contain the endpoint for all the users routes 
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
      console.log(err + " add user");
      res.json({success: false, msg:'Failed to register user',error:err});
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
          expiresIn:120000 // 20 minutes
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

// Get a Users by their Id
router.get('/getUserById', (req, res) => {
  var id = req.query.userId;
  User.getUserById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({user:data})
  });

});

// get the Latest Users from Database
router.get('/getLatestUsers', (req, res) => {
  User.getLatestUser((err, users) => {
    if (err){
      return res.json(err);
    }
    console.log(users[0].name + " latest user from api");
    res.send(users);
  })

});

// get all the Users from Database
router.get('/getAllUsers', (req, res) => {
  User.getAllUser((err, users) => {
    if (err){
      return res.json(err);
    }
    console.log(users[0].name + " All users from the api");
    res.send(users);
  })

});

// Skip Users from Database
router.get('/skipUsers', (req, res) => {
  var number = req.query.skipNumber;
  console.log(number , "number to skip api");
  // Convert number to string
  User.skipUser(parseInt(number),(err, users) => {
    if (err){
      return res.json(err);
    }
    // console.log(users[0].name + " Skip users from the api");
    res.send(users);
  })

});

router.get('/ping', (req, res) => {
    return res.json('pong');
});


module.exports = router;
