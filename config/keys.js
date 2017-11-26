var modePaypal
if (process.env.NODE_ENV == 'production'){
  modePaypal = 'live'
}else {
  modePaypal = 'sandbox'
}

module.exports = {
    modePaypal: modePaypal
}