var raven = require('./raven/raven')
module.exports.sendErrorHttpJsonMessage = function (res,err,msg) {
    if (process.env.NODE_ENV == "production"){
        // Dont show the error stack trace in production for security reason.
        res.json({success: false, msg: msg ,error:err,errorMessage:err.message,listOfErrors: err.errors,erroName:err.name});
    }else {
        // we are in local development. Can show the error stack trace
        res.json({success: false, msg: msg ,error:err,errorMessage:err.message,listOfErrors: err.errors,stack:err.stack});
    }
    // My error reporting tool
    raven.sendErrorMessageToSentry(err)    
}
