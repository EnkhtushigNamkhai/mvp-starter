var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

autoIncrement.initialize(db);

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  content: String,
  score: Number,
  date: String
});

itemSchema.plugin(autoIncrement.plugin, 'Item');
var Item = mongoose.model('Item', itemSchema);

  // Item.save(); on an object instance
  //{content: , score: }
var save = function(content, data, callback) {
  console.log('save');

  var obj = JSON.parse(data);


  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; //January is 0!
  var year = today.getFullYear();

  if (day < 10) {
    day = '0' + day; 
  }

  if (month < 10) {
    month = '0' + month;
  }
  var dateStr = month + '/' + day + '/' + year;
  console.log(dateStr);


  var instance = new Item({content: content, score: obj.sentiment, date: dateStr});
  instance.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Done with saving to database');
    }
  });
}

var selectAll = function(callback, order) {
  Item.find({}).sort({ _id: order }).exec(function (err, response) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response)
    }
  });

  // Item.find({}, function(err, items) {
  //   if(err) {
  //     callback(err, null);
  //   } else {
  //     callback(null, items);
  //   }
  // });
};

module.exports.save = save;
module.exports.selectAll = selectAll;