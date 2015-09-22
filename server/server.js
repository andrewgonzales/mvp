var express = require('express');
var utils = require('./utils');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname + '/../client'));

utils.getData();

app.get('/', function (req, res) {
  utils.getData();
  res.send('index.html');
});

// app.get('/data', function (req, res) {
//   var data = fs.readFile(__dirname + '/../db/cityData.js', function (err, data) {
//     if (err) throw err;
//     res.send(data);
//   });
// });


var port = 8800;
var server = app.listen(port, 'localhost', function () {
  var host = server.address().address;
  console.log('Listening at http://%s:%s', host, port);
});



