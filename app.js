/** 
 * Author: Christian Nogueras
 * 
 * app.js - main start application 
*/

//#region Global Variables
/** Para poner el nombre de la compañia a la que le estoy 
 * haciendo el producto. */
process.env.Compañia = "OPAS"
var gfs // dont delete this variable is used when conecting to mongodb function
//#endregion

//#region Import Required modules 
/** Modules que se leen de un archvio externo . Need to be first because of 
 * appDynamic */
const modules = require('./config/modules')
// variables que se leen de un archivo externo
const variables = require('./config/variables')
const passport = require('passport')
callAllUncaughtExceptionFromNodeJs() // no registrada en los archivos.js del app.Need to be after importing modules and variables of external files
//#endregion

//#region Importing routes files 
// route files
const organization = require('./routes/organization');
const administration = require('./routes/administration');
const users = require('./routes/users');
const fileNames = require('./routes/filename');
const escuelaArchivos = require('./routes/escuelaArchivos');
const paypal = require('./routes/paypal');
const slack = require('./routes/slack');
//#endregion

//Database
modules.Grid.mongo = modules.mongoose.mongo;
connectToMongoDatabase()

// Middlewares 
nameOfFolder = "public";
/** Set Static Folder for when we use Angular an other files - staticfile 
 * keyboard shortcut. Esto ultiliza los archivos Html o Javscript que tu pongas 
 * dentro de el y busca siempre en un folder que se llama public que lo junta 
 * con el current directories por eso path.join(__dirname) */
expressStaticFolder(variables.app,nameOfFolder);
/** The rave request handler must be the first middleware on the app. This is 
 * use to capture error events and send it to the Sentry website 
 * (https://sentry.io/welcome/) */
sentryMiddleware(variables.app,variables.raven.requestHandler())
/* express cors google- App.Use Cors lo que hace es que
 da Allow Acces a cualquier dominio y tambien acepta tipo de data que se envie en el nuevo request. CORS Middleware */
corsMiddleware(variables.app,modules.cors())
bodyParserMiddleware(variables.app,modules.bodyParser.json());
routesMiddleware(variables.app);
expressErrorMiddleware(variables.app);
/** The sentry handler must be before any other error middleware */
sentryMiddleware(variables.app,variables.raven.errorHandler())
PassportMiddleware(variables.app,passport);

//Endpoints
expressGetEndpoint(variables.app);

// Start Server
startServer(variables.app,variables.port);


/*************************** FUNCTIONS *********************/
/** General method for the express app middlewares */
function addMiddleware(app,middleware) {
  app.use(middleware);
}
function corsMiddleware(app,middleware){
  addMiddleware(app,middleware)
}
function sentryMiddleware(app,middleware) {
  addMiddleware(app,middleware);
}

function bodyParserMiddleware(app,middleware) {
  addMiddleware(app,middleware)
}

function PassportMiddleware(app,PassportMiddleware) {
  addMiddleware(app,PassportMiddleware.initialize());
  addMiddleware(app,PassportMiddleware.session());
  // this need to be here for the authentication to work 
  require('./config/passport')(PassportMiddleware);
}

function routesMiddleware(app) {
  let routes = [fileNames, escuelaArchivos, paypal, slack];
  // anything that is /users will go to that users file
  app.use('/users', users);
  // route for organization
  app.use('/organization', organization);
  // route for Administrator
  app.use('/administrator', administration);
  // route for files retrieval
  app.use('/', routes);
}

/** Express error Handling Middleware. Cualquier error no cactheado en la
 * aplicacion epxress de opas pasara a esta funcion y cualquier error que surga 
 * tendra este mensaje de json */
function expressErrorMiddleware(app) {
  app.use(function (err, req, res, next) {
    console.log("Error custom message ", err.customMsg);
    // My error reporting tool
    variables.raven.sendErrorMessageToSentry(err);
    if (err.customMsg) {
      return variables.errorUtility.sendErrorHttpJsonMessage(res, err, err.customMsg);
    }
    else {
      console.log("Error general en aplicacion express de Opas");
      const customMsg = "Error no documentado en la aplicacion express de " + variables.compañia + ". Intentelo nuevamente, si el problema persiste porfavor notifique a un representate de OPAS de este error a continuacion. Error: " + err.message;
      return variables.errorUtility.sendErrorHttpJsonMessage(res, err, customMsg);
      // variables.nodeSendEmail.
    }
  });
}

function expressStaticFolder(app,folder) {
  app.use(modules.express.static(modules.path.join(__dirname,folder)));
}

function expressGetEndpoint(app) {
  app.get('/m', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var err = new Error("E");
    err.customMsg = "Custom Meessage error";
    next(err);
  });
  /** index Route. Invalid Route  */
  app.get('/', (req, res) => {
    res.send('invalid EndPoint');
  });
  /** This is how you combine Angular with Node.js
   * Catch all other routes and return the index file that manage the angular
   * logic */
  app.get('*', (req, res) => {
    res.sendFile(modules.path.join(__dirname, './public/index.html'));
  });
}


function startServer(app,port) {
  return app.listen(port, (req, res) => {
    console.log('Server started on port ' + variables.port);
    variables.raven.captureBreadcrumb({
      message: 'Conecion a servidor hecha',
      category: 'payment',
      data: {
        amount: 312,
      }
    });
    if (process.env.NODE_ENV == 'production') {
      // variables.slack.slackWebhookSendMessage("Hay un visitante en la pagina web de Opas")
    }
  });
}



function importRequiredModules() {

}

/** Este metodo va a coger todas las excepciones que no se han recogido en mi
 * codigo y va a llamar un evento para enviar un json al server */
function callAllUncaughtExceptionFromNodeJs() {
  process.on('uncaughtException', function (err) {
    // My error Reporting Tool
    variables.raven.sendErrorMessageToSentry(err)
    console.log("Un error no registrado en toda la aplicacion de node para la apicacion de " + variables.compañia)
    console.log("Este es el erro que no se registro en toda la aplicacion node", err);
  })
}

/** Function to check different event in mongoDb */
function checkMongooseConnection() {
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

function connectToMongoDatabase() {
  // Check Mongodb connections
  checkMongooseConnection();
  /** Connect to Mongodb Database 
   * To start the mongodb Server go to /usr/local/bin and run ./mongo - that 
   * will start the server and you can use 'mongod'
   * warning - Cant fix deprecation because required to change the logic of the mongoose connection */
  var promise = modules.mongoose.connect(variables.config.database, {
    useMongoClient: true,
    /* other options */
  });
  attachGridToDb(promise);
}



function attachGridToDb(promise) {
  promise.then(() => {
    gfs = modules.Grid(modules.mongoose.connection.db);
    variables.raven.captureBreadcrumb({
      message: 'Conecion a base de datos',
      category: 'payment',
      data: {
        amount: 312,
      }
    });
  });
}


// CODIGO PARA TENER DE REFERENCIA POR SI LUEGO LO USO

// modules.LogRocket.init('rtbfoe/opas-web-app');

// console.log("este el archivo node app que debe llamar al hijo")
// var exec = require('child_process').exec
// exec('node app1.js',(err)=>{
//   if (err){
//     console.log(err)
//   }else {
//     console.log('se llamo al hijo')
//   }
// })

// variables.wisntonLogger.log({
//   level: 'info',
//   message: 'Hello distributed log files!'
// });

// variables.wisntonLogger.log({
//   level: 'error',
//   message: 'Hello distributed log files! error'
// });

// variables.wisntonLogger.log({
//   level: 'warn',
//   message: "Test Message"
// });
