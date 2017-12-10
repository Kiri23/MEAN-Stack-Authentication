var Raven = require('raven');
Raven.config('https://8437f0ecddb64e0b9af3912881bec74f:3f827187629b4a4ca9e609e704bc5cf2@sentry.io/203113',{
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

