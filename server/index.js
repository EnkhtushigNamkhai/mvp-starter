var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var request = require('request');
let https = require ('https');
var indico = require('indico.io');
var config = require('../config.js');

indico.apiKey = config.TOKEN;


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
  console.log('MAKING A POST REQUEST TO THE SERVER FROM ANALYZE!');
  console.log('should be content : ', req.body.content);


  indico.sentiment(req.body.content)
  .then(function(score) {
    

    indico.personality(req.body.content)
    .then(function(personality) {
      
      personality.score = score;

      res.end(JSON.stringify(personality));
    })
    .catch(function(err) {
      console.log(err);
    });
  })
  .catch(function(err) {
    console.log(err);
  });

});

app.post('/post', function (req, res) {
  console.log('MAKING A POST REQUEST TO SERVER FROM POST');
 
  indico.sentiment(req.body.content)
  .then(function(score) {
    indico.emotion(req.body.content)
    .then(function(emotion) {
      emotion.score = score;

        indico.personas(req.body.content, {top_n: 3})
        .then(function(persona) {
          console.log('RESULT OF EMOTIONS: ', emotion);
          console.log('RESULT OF PERSONAS : ', persona);


          var obj = {persona: persona, emotion: emotion, sentiment: score}
          res.end(JSON.stringify(JSON.stringify(obj)));
          //save to database here...
          // db.save(personality);          
          

          // console.log(score, emotion, personality);
          
        });

      
    })
    .catch(function(err) {
      console.log(err);
    });
  })




  // indico.personas(req.body.content)

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



