var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  content: String,
  score: Number
});

var Item = mongoose.model('Item', itemSchema);

  // Item.save(); on an object instance
  //{content: , score: }
var save = function(content, data, callback) {
  console.log('save');

  var obj = JSON.parse(data);

  console.log(typeof obj);
  var instance = new Item({content: content, score: obj.sentiment});
  instance.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Done with saving to database');
    }
  });
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.save = save;
module.exports.selectAll = selectAll;