var modules = require('../../config/modules')
// to parse the repsonse form post response. for buton actions methods
var urlencodedParser = modules.bodyParser.urlencoded({ extended: false })

/**
 * Send webhook to slack
 * @param {any} message
 */
module.exports.slackWebhookSendMessage = function (message){
    payload = {
      "text": message}
    modules.request.post(
      process.env.slack_webhook_url,
      { json: payload },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
          }else {
            console.log(body)
          }
      }
    );
  }
 /**
  * Send message to slack via the web api
  * 
  */
  module.exports.slackWebSendMessage = function (){
    console.log("llamando butones")
    var token = process.env.slack_token  
    var apiEndPoint = "https://slack.com/api/chat.postMessage?token="+token+"&channel=C0G3G37HN&text=hola&attachments=%5B%7B%22text%22%3A%22Chose%20a%20game%20to%20play%22%2C%22attachment_type%22%3A%20%22default%22%2C%22actions%22%3A%20%5B%20%7B%20%20%22name%22%3A%20%22game%22%2C%20%20%22text%22%3A%20%22Chess%22%2C%20%20%22type%22%3A%20%22button%22%2C%20%22value%22%3A%20%22chess%22%20%7D%5D%7D%5D%5D&pretty=1"
    modules.request.get(apiEndPoint)
  }