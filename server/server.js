var express = require('express');
var app = express();
app.use(express.static(__dirname + '/../client'));

app.get('/', function (req, res) {
  console.log(__dirname);
  res.send(__dirname );
});

var port = 8800;
var server = app.listen(port, 'localhost', function () {
  var host = server.address().address;
  console.log('Listening at http://%s:%s', host, port);
});

