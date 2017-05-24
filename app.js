/* Author: Christian Nogueras
app.js - main start application */

// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// variables
const config = require('./config/databse')

// Connect to Mongodb Database
// To start the mongodb Server go to /usr/local/bin and run ./mongo - that will start the server and you can use 'mongod'
mongoose.connect(config.database);


mongoose.connection.on('connected',() => {
  console.log('Connected to Database ' + config.database);
});
// Check Mongodb connections
checkMongooseConnection(mongoose);

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

// Set Static Folder for when we use Angular an other files - staticfile keyboard shortcut

// Esto ultiliza los archivos Html o Javscript que tu pongas dentro de el y busca siempre en un folder que se llama public que lo junta con el current directories por eso path.join(__dirname)
app.use(express.static(path.join(__dirname,'public')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// index Route
app.get('/',(req,res) => {
  res.send('invalid EndPoint');

})

// This is how you combine Angular with Node.js
// Catch all other routes and return the index file that mange the angular logic
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start Server
app.listen(port,() => {
  console.log('Server started on port '+port);

})

function checkMongooseConnection(mongose){
  // do Validation if Mongoose(param) is a type of Mongoose
   if (mongoose.constructor.name !== "Mongoose"){
     console.log("Parameter is not a mongoose Object");
     return;
   }
    mongoose.connection.on('open', function (ref) {
      connected=true;
      console.log('open connection to mongo server.');
  });

  mongoose.connection.on('disconnected', function (ref) {
      connected=false;
      console.log('disconnected from mongo server.');
  });

  mongoose.connection.on('close', function (ref) {
      connected=false;
      console.log('close connection to mongo server');
  });

  mongoose.connection.on('error', function (err) {
      connected=false;
      console.log('error connection to mongo server!');
      console.log(err);
  });

  mongoose.connection.db.on('reconnect', function (ref) {
      connected=true;
      console.log('reconnect to mongo server.');
  });
}
