var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var request = require('request');
let https = require ('https');
var indico = require('indico.io');
indico.apiKey =  'acda2ec8ced0e5b59433bc2f57830ce3';


var app = express();

// app.get('/', function (req, res, next) {
//   console.log('REQ URL: ', req.url);
//   console.log('goes here');
//   next();
// });
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());



//analyze page does not have to save anything in database, just make a get Req to API 
app.post('/analyze', function (req, res) {
  console.log('YAYYY MAKING A POST REQUEST TO THE SERVER FROM ANALYZE!');
  console.log('should be content : ', req.body.content);


  indico.sentiment(req.body.content)
  .then(function(data) {
    res.end(JSON.stringify(data));

    // indico.personality("I love my friends")
    // .then(function(res) {
    //   console.log(res);
    // })
    // .catch(function(err) {
    //   console.log(err);
    // });
  })
  .catch(function(err) {
    console.log(err);
  });
  //res.send('success');
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



