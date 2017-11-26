module.exports = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret
  }

  module.exports.configurePaypal = function(paypal){
    return paypal.configure({
      'mode': 'live', //sandbox or live
      'client_id':process.env.client_id ,
      'client_secret':process.env.client_secret // no funciona si quito las string y pongo variables
    });
  }