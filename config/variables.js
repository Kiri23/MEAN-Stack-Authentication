const modules = require('./modules')

// export all variables to have for the application
module.exports = {
    passport: require('./passport')(modules.passport),
    config: require('./database'),
    paypal: require('./paypal'),
    errorUtility: require('../utilities/error'),
    nodeSendEmail: require('../utilities/nodemailer'),
    compañia : process.env.Compañia,
    MACHINE_NAME:  'OpasWebApp', // variables for keymetrics and PM2
    PRIVATE_KEY: process.env.PRIVATE_KEY ||'tpa9qml5rkc1ybs', // change to use in procces.env 
    PUBLIC_KEY: process.env.PUBLIC_KEY ||'x9k7bhzcxyvkhgd',
    instances: process.env.WEB_CONCURRENCY || -1, // Set by Heroku or -1 to scale to max cpu core -1
    maxMemory: process.env.WEB_MEMORY || 512,    // " " "
    app: modules.express(), // app express,
    router: modules.express.Router(),
    port: process.env.PORT || 3002, // Port Number
  };