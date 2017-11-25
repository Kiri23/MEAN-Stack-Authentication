// Contain the endpoint for all the organization routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/database');
const Organization = require('../models/organization');

//aget6 shortcut for app.get

// Register
// cause whe're in the organization file is organization/register
router.post('/register', (req, res,next) => {
  // Organization Object Retrieve organization Properties from Form
  let newOrganization = new Organization({
    name: req.body.name,
    email: req.body.email
  });
// Add Organization to mongoDb
  Organization.addOrganization(newOrganization,(err, organization) => {
    if(err){
      console.log(err + " add organization");
      res.json({success: false, msg:'Failed to register organization',error:err});
    }else{ // addOrganization to the Database
      res.json({success:true,msg:'Organization Registered',organization:newOrganization});
    }
  });
// End add Organization logic

})

// Authenticate Route
router.post('/authenticate', (req, res,next) => {
  const name = req.body.name;

  // Get the organization to authenticate
  Organization.getOrganizationByname(name,(err,organization) => {
    if (err) throw err;
    if(!organization){
      return res.json({success:false,msg:'Organization not found'});
    }else {
      return res.json({success:true,msg:'Organization found',organization: organization});
    }
  })

});

// protect route with our Authentication, Our Token
// Profile for organization Route
router.get('/profile',(req, res,next) => {
  res.json({organization:req.organization});
});

// Get a Organizations by their Id
router.get('/getOrganizationById', (req, res) => {
  // query parameter
  var id = req.query.OrganizationId;
  Organization.getOrganizationById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({organization:data})
  });

});

// get the Latest Organizations from Database
router.get('/getLatestOrganizations', (req, res) => {
  Organization.getLatestOrganization((err, organization) => {
    if (err){
      return res.json(err);
    }
    // console.log(organization[0].name + " latest organization from api");
    res.send(organization);
  })

});

// get all the Organizations from Database
router.get('/getAllOrganizations', (req, res) => {
  Organization.getAllOrganization((err, organization) => {
    if (err){
      return res.json(err);
    }
    // console.log(organization[0].name + " All organization from the api");
    res.send(organization);
  })

});

// Skip Organizations from Database
router.get('/skipOrganizations', (req, res) => {
  var number = req.query.skipNumber;
  console.log(number , "number to skip api");
  // Convert number to string
  Organization.skipOrganization(parseInt(number),(err, organization) => {
    if (err){
      return res.json(err);
    }
    // console.log(organization[0].name + " Skip organization from the api");
    res.send(organization);
  })

});

router.get('/ping', (req, res) => {
    return res.json('pong');
});


module.exports = router;
