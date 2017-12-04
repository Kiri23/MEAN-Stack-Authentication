module.exports.sendErrorHttpJsonMessage = function (res,err,msg) {
    if (process.env.NODE_ENV == "production"){
        // Dont show the stack in production for security reason.
        res.json({success: false, msg: msg ,error:err,errorMessage:err.message,listOfErrors: err.errors,erroName:err.name});
    }else {
        // we are in local development
        res.json({success: false, msg: msg ,error:err,errorMessage:err.message,listOfErrors: err.errors,stack:err.stack});
    }
}

module.exports.sendModelJsonErrorMessage = function (res,msg) {
    
}

module.exports.sendModelJsonErrorMessage = function (err,msg) {
    return { 
        succes : false, 
        msg :  msg ,
        error : err
    }
}

module.exports.sendJsonErrorMessage = function (msg){
    return {
        succes: false,
        msg: msg
    }
}

