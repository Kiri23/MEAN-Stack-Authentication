/* El proposito de este archvio es de usar las variables dependiendo si la aplicacion esta en producion o en desarrollo local **/
var modePaypal
if (process.env.NODE_ENV == 'production'){
  modePaypal = 'live'
}else {
  modePaypal = 'sandbox'
}

module.exports = {
    modePaypal: modePaypal
}