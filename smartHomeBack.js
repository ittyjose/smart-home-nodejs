"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var firebase = require("firebase");
ar config = {
  apiKey: "AIzaSyB3wIlsmFHyofbazQ0LS6wPH5rJGL9Si6A",
  authDomain: "aqueous-tube-168615.firebaseapp.com",
  databaseURL: "https://aqueous-tube-168615.firebaseio.com",
  projectId: "aqueous-tube-168615",
  storageBucket: "aqueous-tube-168615.appspot.com",
  messagingSenderId: "1073704194948"
}
firebase.initializeApp(config);

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/IoT", function(req, res) {
  var value;
  var state =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.state
      ? req.body.result.parameters.state
      : "Seems like some problem. Speak again.";
      if(status=="on")
      {
          value=1;
      }
      else {
        value=0;
      }
var database = firebase.database();
    firebase.database().ref('smartHome').set({
    light: value,
    
  });
var res="Your device is "+status;
  return res.json({
    speech: res,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});