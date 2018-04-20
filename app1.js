/** 
 * Author: Christian Nogueras
 * 
 * app.js - main start application 
*/

// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
var pm2 = require('pm2');
var trace = require('@risingstack/trace');


// variables
const config = require('./config/database');
// Keys for KeyMetrics and PM2
var MACHINE_NAME = 'OpasWebApp';
var PRIVATE_KEY  = 'tpa9qml5rkc1ybs';
var PUBLIC_KEY   = 'x9k7bhzcxyvkhgd';
var instances = process.env.WEB_CONCURRENCY || -1; // Set by Heroku or -1 to scale to max cpu core -1
var maxMemory = process.env.WEB_MEMORY || 512;    // " " "
// const pm2Keymetric = require('./pm2-keymetricSetUp.js');

const multer  = require('multer')
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs;
const GridFsStorage = require('multer-gridfs-storage');



// route files
const organization = require('./routes/organization');
const administration = require('./routes/administration');
const users = require('./routes/users');
const fileNames = require('./routes/filename');
const escuelaArchivos = require('./routes/escuelaArchivos');


// app express
const app = express();

console.log('este es el archvio node app1 que se debe llamar')

// Connect to Mongodb Database
// To start the mongodb Server go to /usr/local/bin and run ./mongo - that will start the server and you can use 'mongod'
mongoose.connect(config.database);


var promise = mongoose.connect(config.database, {
    useMongoClient: true,
    /* other options */
  });
  promise.then( ()=>{
    // Check Mongodb connections
    checkMongooseConnection(mongoose);
  });
// // Parte Nueva Añadida
// mongoose.connection.once('open', () => {
// });

// Check Mongodb connections
checkMongooseConnection(mongoose);

console.log("Se va a llamar el metodo")
// startPM2();

app.get('/file/:filename', function(req, res){
    gfs.collection('templateFiles'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        /** create read stream */
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "templateFiles"
        });
        /** set the proper content type. */
        res.set('Content-Type', files[0].contentType)
        console.log("pipe");
        console.log(readstream.pipe(res).req.originalUrl);
        // readstream.pipe(res) is the original one but I want the Url because I want
        // to reference to this link in Angular2
        return readstream.pipe(res).req.originalUrl;

        // 535
    });
  });

// Fin de la parte Nueva Añadida


// Port Number
const port = process.env.PORT || 3003;

// express cors google- App.Use Cors lo que hace es que
// da Allow Acces a cualquier dominio y tambien acepta tipo de data que se envie en el nuevo request.
//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
// anything that is /users will go to that users file
app.use('/users',users);
// route for organization
app.use('/organization',organization);
// route for Administrator
app.use('/administrator',administration);
// route for files retrieval
app.use('/',[fileNames,escuelaArchivos]);

// app.post('/image',upload.single('img'), (req,res,next) => {
//
//   if (req.file == undefined){
//     return res.send("Error Req file undefined");
//   } else if (req.file.length == 0 ){
//     return res.send("erro. req.file is zero lenght");
//   }
//
//   res.json({
//     file:req.file
//   });
// });


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
  console.log('Server started on port '+ port);

})

// Function to chech different event in mongoDb
function checkMongooseConnection(mongose){
  // do Validation if Mongoose(param) is a type of Mongoose
   if (mongoose.constructor.name !== "Mongoose"){
     console.log("Parameter is not a mongoose Object");
     return;
   }
    mongoose.connection.on('open', function (ref) {
      connected=true;
      gfs = Grid(mongoose.connection.db);
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

function setUpStorageUsingMongoDb(){
  // set up storage for file using mongDb (Mongoose)

  /** Setting up storage using multer-gridfs-storage */
  var storage = GridFsStorage({
      url: config.database,
      gfs : gfs,
      filename: function (req, file, cb) {
        var options = { year: 'numeric', month: 'long', day: 'numeric',
        				        hour: 'numeric', minute:'numeric',second:'numeric'
                      };
        // verificar si el filename tiene mas de un punto y borrarselor que solo se quede con el
        // ultimo punto
        var fileName = file.originalname;
        var nameOfFile = fileName.split(".")[fileName.split(".").length -2]
        var typeOfFileName = fileName.split('.')[fileName.split('.').length -1];
        var datetimestamp = new Date().toLocaleDateString('en-US',options);

        cb(null, nameOfFile + '-' + datetimestamp + '.' + typeOfFileName);
      },
      /** With gridfs we can store aditional meta-data along with the file */
      metadata: function(req, file, cb) {
          cb(null, { originalname: file.originalname });
      },
      root: 'templateFiles' //root name for collection to store files into
  });

    upload = multer({ //multer settings for single upload
      storage: storage
  }).single('file');
}

function startPM2() {
  console.log("Esta dentro de la funcion pm2")
  pm2.connect(function() {
    pm2.start({
      script    : 'app.js',
      name      : 'OpasWebApp',     // ----> THESE ATTRIBUTES ARE OPTIONAL: 
      exec_mode : 'cluster',            // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
      instances : instances,                   
      max_memory_restart : maxMemory + 'M',   // Auto restart if process taking more than XXmo
      env: {                            // If needed declare some environment variables
        "NODE_ENV": "production",
        "AWESOME_SERVICE_API_TOKEN": "xxx"
      },
      post_update: ["npm install"]       // Commands to execute once we do a pull from Keymetrics
    }, function() {
      pm2.interact(PRIVATE_KEY, PUBLIC_KEY, MACHINE_NAME, function() {
      });
    });
  });

}

// var user = new users({
//   name: "Huis2",
//   email: "huis2@mai.com",
//   username: "snsn"
//
// });

// How to save Organization data and administrator data
// const Administrator = require("./models/administrator")
// const orga = require('./models/organization');
//
// var admin = new Administrator({
  // name:"Test",
  // users:"592a1d46b872b500117d1fb0",
  // email: "test@mai.com",
  // username: "tets",
  // password: "1234"
// });
//
// var orga2 = new orga({
//   name:"OrgaTest",
//   administrator:"59323daf506a91a626c5eb68",
//   users:admin.users,
//   email:"orga@hot.organization"
//
// });
//
// orga2.save((err) => {
//    if (!err){
//      orga.find({})
//         .populate('administrator')
//         .populate("users")
//         .exec((err,orga) => {
//           console.log(JSON.stringify(orga, null, "\t"))
//         })
//    }
// });
//
//
// admin.save((err) => {
//    if (!err){
//      Administrator.find({})
//         .populate('users')
//         .exec((err,admin) => {
//           console.log(JSON.stringify(admin, null, "\t"))
//         })
//    }
// });
