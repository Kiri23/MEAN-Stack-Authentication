const modules = require('../config/modules')

var logger = modules.winston.createLogger({
  level: 'info',
  format: modules.winston.format.combine(
    modules.winston.format.colorize({ all: true }),
    modules.winston.format.simple()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new modules.winston.transports.File({ filename: 'logs/error.log', 
                                          level: 'error' ,
                                          maxsize: 5242880, //5MB
                                          maxFiles: 5
                                        }),
    new modules.winston.transports.File({ filename: 'logs/combined.log' }),
  ]
});
logger.add(new modules.winston.transports.Console({
  format: modules.winston.format.simple(),
  colorize:true  
}));


module.exports = logger
