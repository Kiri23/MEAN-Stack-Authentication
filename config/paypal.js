module.exports = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret
  }

  require('./modules').paypal.configure({
    'mode': 'live', //sandbox or live
    'client_id':process.env.client_id ,
    'client_secret':process.env.client_secret // no funciona si quito las string y pongo variables
  });