/* Author: Christian Nogueras
app.js - main start application */

// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

//routes files
const users = require('./routes/users')

// Port Number
const port = 3002;

// express cors google- App.Use Cors lo que hace es que
// da Allow Acces a cualquier dominio y tambien acepta tipo de data que se envie en el nuevo request.
//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// anything that is /users will go to that users file
app.use('/users',users);

// index Route
app.get('/',(req,res) => {
  res.send('invalid EndPoint');

})

// Start Server
app.listen(port,() => {
  console.log('Server started on port '+port);

})
