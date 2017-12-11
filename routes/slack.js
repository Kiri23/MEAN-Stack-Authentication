const variables = require('../config/variables')
var urlencodedParser = require('body-parser').urlencoded({ extended: false })
var slack = require('../utilities/slack/slack')

// Route post for maging events in slacks. This post method get call every time a new message appear in slack. Right know it does nothing with the response
variables.router.post("/slackEvents",(req,res)=>{
    console.log("Se llamo events")
    // console.log(req.body)
    if (req.body.type === 'url_verification') {
      res.send(req.body.challenge);
    }
  
    let q = req.body;
    // 1. To see if the request is coming from Slack
    if (q.token !== process.env.SLACK_VERIFICATION_TOKEN) {
      res.sendStatus(400);
      return;
    }
    // 2. Events - get the message text
    else if (q.type === 'event_callback') {
      if(!q.event.text) return;
        // Do logic here
        //  analyzeTone(q.event); // sentiment analysis
    }
  
  })


  // This method get call for interatives message. e.g when someone click a button  
  variables.router.post("/incomingSlackMessageAction",urlencodedParser,(req,res)=>{
    res.status(200).end()
    console.log("Hello baby")
    console.log(req.body)
  
    var actionJSONPayload = JSON.parse(req.body.payload) // parse URL-encoded payload JSON string
  
    var message = {
      "text": actionJSONPayload.user.name+" clicked: "+actionJSONPayload.actions[0].value,
      "replace_original": false
  }
  slack.sendMessageToSlackResponseURL(actionJSONPayload.response_url, message)
    // res.send(req.body)
  });

  // This method manage the foodme comand in slack
  variables.app.post('/slashComand',urlencodedParser,(req,res)=>{
    res.status(200).end() // best practice to respond with empty 200 status code  
    console.log("form localhos")
    console.log(req.body)
    var reqBody = req.body
    var responseURL = reqBody.response_url
    console.log(reqBody.token)
    console.log(process.env.slack_verification_token)
    if (reqBody.token != process.env.slack_verification_token){
        console.log("o aqui ?")
        res.status(403).end("Access forbidden")
    }else{
      var message = {
        "text": "This is your first interactive message",
        "attachments": [
            {
                "text": "Building buttons is easy right?",
                "fallback": "Shame... buttons aren't supported in this land",
                "callback_id": "button_tutorial",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "actions": [
                    {
                        "name": "yes",
                        "text": "yes",
                        "type": "button",
                        "value": "yes"
                    },
                    {
                        "name": "no",
                        "text": "no",
                        "type": "button",
                        "value": "no"
                    },
                    {
                        "name": "maybe",
                        "text": "maybe",
                        "type": "button",
                        "value": "maybe",
                        "style": "danger"
                    }
                ]
            }
        ]
    }
    console.log("Se llega aqui?")
    slack.sendMessageToSlackResponseURL(responseURL, message)  
  }
  console.log("No llega a ninguno de los dos")
  })

  module.exports = variables.router