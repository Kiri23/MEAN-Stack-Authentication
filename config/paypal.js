module.exports = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret
  }

  require('./modules').paypal.configure({
    'mode': require('./keys').modePaypal, //sandbox or live
    'client_id':process.env.client_id ,
    'client_secret':process.env.client_secret // no funciona si quito las string y pongo variables
  });
