var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var request = require('request');
let https = require ('https');
var indico = require('indico.io');
var config = require('../config.js');

indico.apiKey = config.TOKEN;


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

function fetch(content, callback) {
  indico.sentiment(content)
    .then(function(score) {
      indico.emotion(content)
      .then(function(emotion) {
        emotion.score = score;

        indico.personas(content, {top_n: 3})
        .then(function(persona) {
          var obj = {'persona': persona, 'emotion': emotion, 'sentiment': score}
          
          callback(null, JSON.stringify(obj));
        }); 
    })
    .catch(function(err) {
      callback(err, null);
    });
  })
}

//analyze page does not have to save anything in database, just make a get Req to API 
app.post('/analyze', function (req, res) {
  console.log('MAKING A POST REQUEST TO THE SERVER FROM ANALYZE!');
  console.log('should be content : ', req.body.content);

  fetch(req.body.content, function(err, data) {
    if (err) {
      console.log("NOOOO");
    } else {
      res.end(data);
    }
  });
});

app.post('/post', function (req, res) {
  console.log('MAKING A POST REQUEST TO SERVER FROM POST');
  //posting content 
  fetch(req.body.content, function(err, data) {
    if (err) {
      console.log("NOOOO");
    } else {

      
      //save the data to the database...
      //need to get the current date and save it to database too
      items.save(req.body.content, data);

      res.end(data);
    }
  });
});

app.get('/timeline', function (req, res) {
  console.log('REQUEST TO TIMELINE FROM CLIENT');
  //read from the database, and send it to the client
  items.selectAll(function(err, data) {
    if (err) {
      console.log('ERROR READING FROM DATABASE');
    } else {
      console.log("success", data);
      res.end(JSON.stringify(data));
    }
  });
});

app.get('/items', function (req, res) {
  console.log('REQ URL: ', req.url);
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('DATA', data);
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});



  //with microsoft azure text sentiment
  // var dataObj = 
  //   { 'documents': 
  //     [
  //       {'id': '1',
  //        'language': 'en',
  //        'text': JSON.stringify(req.body.content)
  //       },
  //     ]
  //   }

  // var request_params = {
  //   url: 'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
  //   body: JSON.stringify(dataObj),
  //   headers: {
  //     'content-type' : 'application/json',
  //     "Ocp-Apim-Subscription-Key":""
  //   }
  // }

  // request.post(request_params, function(error, response, body) {
  //   if (error) {
  //     console.log('ERROR FROM API REQUEST :(');
  //   } else {
  //     console.log('API request Response : ', body);
  //   }
  // });



