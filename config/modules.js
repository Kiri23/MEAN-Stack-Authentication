// export all required modules to have for the application
module.exports = {
    // appDynamic: require('./appDynamic'),// this need to be the first for appDynamic to work
    express: require('express'),
    request: require('request'),
    raygun: require('raygun'),  
    // newrelic: require('newrelic'), // for Heroku Monitoring app,
    path: require('path'),
    bodyParser: require('body-parser'),
    cors: require('cors'),
    passport: require('passport'),
    mongoose: require('mongoose'),
    pm2: require('pm2'),
    trace: require('@risingstack/trace'),
    multer: require('multer'),
    Grid: require('gridfs-stream'),
    GridFsStorage: require('multer-gridfs-storage'),
    paypal: require('paypal-rest-sdk'),
    dotenv: require('dotenv').config(),
    winston: require('winston')  

  };

  // LogRocket: require('logrocket'),
  // pm2Keymetric: require('./pm2-keymetricSetUp.js')