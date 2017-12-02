module.exports.sendErrorHttpJsonMessage = function (res,err,msg) {
    res.json({success: false, msg: msg ,error:err,errorMessage:err.message,listOfErrors: err.errors});
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