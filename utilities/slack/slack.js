var modules = require('../../config/modules')
// to parse the repsonse form post response. for buton actions methods
var urlencodedParser = modules.bodyParser.urlencoded({ extended: false })
var host = "https://slack.com/api"
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
  * Send message to slack via the web api.
  * Using Destructive Parameters
  */
  module.exports.slackWebSendMessage = function ({message,channel='general'}){
    var options = {
        method: 'POST',
        uri: 'https://slack.com/api/chat.postMessage',
        form: {
          token: process.env.slack_token,
          // channel to send the message in slack
          channel: channel,
          text: message.text,
          attachments: JSON.stringify([message.attachments[0]])
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      };  
      // make the request with the options speccfied in the object option
      modules.request(options, (error, response, body) => {
        if (error){
            console.log(error)
            // handle errors as you see fit
        }else {
          console.log("se envio el mensaje?")
          console.log(body)
        }
    })
  }
  
module.exports.sendMessageToSlackResponseURL = function (responseURL, JSONmessage){
    console.log('hello response url')
    console.log(responseURL)
    console.log(JSONmessage)
    var postOptions = {
        uri: responseURL,
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        json: JSONmessage
    }
    modules.request(postOptions, (error, response, body) => {
        if (error){
            console.log(error)
            // handle errors as you see fit
        }else {
          console.log("se envio el mensaje?")
          console.log(body)
        }
    })
  }