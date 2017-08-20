const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'christian.nogueras@upr.edu',
        pass: '841135404'
    },
    tls: { rejectUnauthorized: false }
});

module.exports.sendEmail = function (mailOptions){
   // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log('Error ' + error)
      console.log('Error al enviar el email para '+ mailOptions.to)
      return
    }
    console.log('Message sent to the email: ' + info.response);
  });
}