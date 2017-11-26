// export all required modules to have for the application
module.exports = {
    express: require('express'),
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
    dotenv: require('dotenv').config()
    

  };

  // LogRocket: require('logrocket'),
  // pm2Keymetric: require('./pm2-keymetricSetUp.js')