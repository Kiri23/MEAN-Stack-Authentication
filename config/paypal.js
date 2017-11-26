module.exports = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret
  }

  require('./modules').paypal.configure({
    'mode': require('./keys').modePaypal, //sandbox or live
    'client_id':process.env.client_id ,
    'client_secret':process.env.client_secret // no funciona si quito las string y pongo variables
  });

  // process env.client_id en heroku tengo una configuracion para que corra con los credenciales del live mode y en local development tengo un .env file para que corra con los credenciales locales de paypal

  // si esta en producion el modo de paypal va a ser Live, si esta en development(local) el modo de paypal va a ser sandbox. El keys files es el que se encarga de manejar la llaves en producion o en local
