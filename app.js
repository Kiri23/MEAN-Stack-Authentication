
/** 
 * Author: Christian Nogueras
 * 
 * app.js - main start application 
*/

// Global Variable. Para poner el nombre de la compañia a la que le estoy haciendo el producto.
process.env.Compañia = "OPAS"

var gfs
// Modules que se leen de un archvio externo 
const modules = require('./config/modules')
// variables que se leen de un archivo externo
const variables = require('./config/variables')
callAllUncaughtExceptionFromNodeJs() // no registrada en los archivos.js del app.Need to be after const variables


// route files
const organization = require('./routes/organization');
const administration = require('./routes/administration');
const users = require('./routes/users');
const fileNames = require('./routes/filename');
const escuelaArchivos = require('./routes/escuelaArchivos');
const paypal = require('./routes/paypal');

modules.Grid.mongo = modules.mongoose.mongo;
// modules.LogRocket.init('rtbfoe/opas-web-app');

connectToMongoDatabase()

checkMongooseConnections()


console.log("Se va a llamar el metodo")
// express cors google- App.Use Cors lo que hace es que
// da Allow Acces a cualquier dominio y tambien acepta tipo de data que se envie en el nuevo request.
//CORS Middleware
variables.app.use(modules.cors());

// Body Parser Middleware
variables.app.use(modules.bodyParser.json());
// anything that is /users will go to that users file
variables.app.use('/users',users);
// route for organization
variables.app.use('/organization',organization);
// route for Administrator
variables.app.use('/administrator',administration);
// route for files retrieval
variables.app.use('/',[fileNames,escuelaArchivos,paypal]);

// Set Static Folder for when we use Angular an other files - staticfile keyboard shortcut
// Esto ultiliza los archivos Html o Javscript que tu pongas dentro de el y busca siempre en un folder que se llama public que lo junta con el current directories por eso path.join(__dirname)
variables.app.use(modules.express.static(modules.path.join(__dirname,'public')));

// Passport Middleware
variables.app.use(modules.passport.initialize());
variables.app.use(modules.passport.session());

variables.app.get('/m',(req,res,next) =>{
  var err = new Error("E");
  err.customMsg = "Custom Meessage error"
  next(err)
});

variables.app.get('/s',(req,res)=>{
    
})
// Express error Handling Middleware. Cualquier error no cactheado en la aplicacion epxress de opas pasara a esta funcion y cualquier error que surga tendra este mensaje de json
variables.app.use(function (err,req,res,next){
  console.log("Error custom message ", err.customMsg)
  if(err.customMsg){
    return variables.errorUtility.sendErrorHttpJsonMessage(res,err,err.customMsg);    
  }else {
    console.log("Error general en aplicacion express de Opas")
    const customMsg = "Error no documentado en la aplicacion express de " + variables.compañia + ". Intentelo nuevamente, si el problema persiste porfavor notifique a un representate de OPAS de este error a continuacion. Error: " + err.message 
    return variables.errorUtility.sendErrorHttpJsonMessage(res,err,customMsg);
    // variables.nodeSendEmail.
  }
  
});



// index Route. Invalid Route 
variables.app.get('/',(req,res) => {
  res.send('invalid EndPoint');
})


// This is how you combine Angular with Node.js
// Catch all other routes and return the index file that mange the angular logic
variables.app.get('*', (req, res) => {
  res.sendFile(modules.path.join(__dirname, './public/index.html'));
});

// Start Server
variables.app.listen(variables.port,() => {
  console.log('Server started on port '+ variables.port);

})


// ********** Functions  ***************** // 

// Este metodo va a coger todas las excepciones que no se han recogido en mi codigo y va a llamar un evento para enviar un json al server
function callAllUncaughtExceptionFromNodeJs(){
  process.on('uncaughtException', function (err) {
    process.emit('notCaughtExeception',"Un error no documentado en la aplicacion " + variables.compañia+ ". Si el problema persiste Por favor adviertele a un representante de "+variables.compañia)  // falta http core modules para hacer un request  en json
    console.log("Un error no registrado en toda la aplicacion de node para la apicacion de "+variables.compañia)
    console.log(err);
    process.exit(1)
  })
}

// Function to chech different event in mongoDb
function checkMongooseConnections(){
  modules.mongoose.connection.on('open', function (ref) {
      console.log('open connection to mongo server.');
  });

  modules.mongoose.connection.on('disconnected', function (ref) {

      console.log('disconnected from mongo server.');
  });

  modules.mongoose.connection.on('close', function (ref) {

      console.log('close connection to mongo server');
  });

  modules.mongoose.connection.on('error', function (err) {

      console.log('error connection to mongo server!');
      console.log(err);
  });

  // modules.mongoose.connection.db
  // modules.mongoose.connection.db.on('reconnect', function (ref) {
  //     console.log('reconnect to mongo server.');
  // });
}

function connectToMongoDatabase (){
  // ********************** MONGO Database *************** // 
    // Connect to Mongodb Database 
    // To start the mongodb Server go to /usr/local/bin and run ./mongo - that will start the server and you can use 'mongod'
    // Cant fix deprecation because required to change the logic of the mongoose connection
    var promise = modules.mongoose.connect(variables.config.database, {
      useMongoClient: true,
      /* other options */
    });
    promise.then( ()=>{
      gfs = modules.Grid(modules.mongoose.connection.db);
      // Check Mongodb connections
      checkMongooseConnection(mongoose);
    });

// ********************** End MONGO Database *************** // 
}