// Contain the endpoint for all the fileNames routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Import third partie library js
const underscore = require('underscore');

const config = require('../config/database');
const fileName = require('../models/filename');

const variables = require('../config/variables')



//aget6 shortcut for app.get

// protect route with our Authentication, Our Token
// Profile Route
router.get('/profile',passport.authenticate('jwt',{session:false}),(req, res,next) => {

});

// router.get('/file/:filename', function(req, res){
//   variables.gfs.collection('templateFiles'); //set collection name to lookup into

//   /** First check if file exists */
//   variables.gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
//       if(!files || files.length === 0){
//           return res.status(404).json({
//               responseCode: 1,
//               responseMessage: "error"
//           });
//       }
//       /** create read stream */
//       var readstream = variables.gfs.createReadStream({
//           filename: files[0].filename,
//           root: "templateFiles"
//       });
//       /** set the proper content type. */
//       res.set('Content-Type', files[0].contentType)
//       console.log("pipe");
//       console.log(readstream.pipe(res).req.originalUrl);
//       // readstream.pipe(res) is the original one but I want the Url because I want
//       // to reference to this link in Angular2
//       return readstream.pipe(res).req.originalUrl;

//       // 535
//   });
// });

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
