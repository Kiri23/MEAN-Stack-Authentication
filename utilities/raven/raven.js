var Raven = require('raven');
Raven.config(process.env.sentry_dsn,{
  release: '2da95dfb052f477380608d59d32b4ab9',
  autoBreadcrumbs: true
}).install();

module.exports = Raven

/**
 * Sentry is my error reporting tool. You can find it at sentry.io
 */
module.exports.sendErrorMessageToSentry = function(err){
  Raven.captureException(err, function (sendErr, eventId) {
    // This callback fires once the report has been sent to Sentry
    if (sendErr) {
      console.error('Failed to send captured exception to Sentry');
    } else {
      console.log('Captured exception and send to Sentry successfully');
    }
  });
}

