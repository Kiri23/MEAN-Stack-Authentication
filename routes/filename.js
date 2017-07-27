// Contain the endpoint for all the fileNames routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Import third partie library js
const underscore = require('underscore');

const config = require('../config/databse');
const fileName = require('../models/filename');



//aget6 shortcut for app.get

// protect route with our Authentication, Our Token
// Profile Route
router.get('/profile',passport.authenticate('jwt',{session:false}),(req, res,next) => {

});

// Get a fileNames by their Id
router.get('/getfileNameById', (req, res) => {
  var id = req.query.fileNameId;
  fileName.getfileNameById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({fileName:data})
  });

});

// get the Latest fileNames from Database
router.get('/getLatestfile', (req, res) => {
  fileName.getLatestfile((err, fileNames) => {
    if (err){
      return res.json(err);
    }
    console.log(fileNames[0].name + " latest fileName from api");
    res.send(fileNames);
  })

});

// get all the fileNames from Database
router.get('/getAllfileNames', (req, res) => {
  fileName.getAllFileName((err, fileNames) => {
    if (err){
      return res.json(err);
    }
    console.log(fileNames[0].name + " All fileNames from the api");
    res.send(fileNames);
  })

});

// Skip fileNames from Database
router.get('/skipfileNames', (req, res) => {
  var number = req.query.skipNumber;
  console.log(number , "number to skip api");
  // Convert number to string
  fileName.skipfileName(parseInt(number),(err, fileNames) => {
    if (err){
      return res.json(err);
    }
    // console.log(fileNames[0].name + " Skip fileNames from the api");
    res.send(fileNames);
  })

});


router.get('/ping', (req, res) => {
    return res.json('pong');
});


module.exports = router;
