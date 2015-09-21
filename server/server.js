var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('You got served');
});

var port = 8800;
var server = app.listen(port, 'localhost', function () {
  var host = server.address().address;
  console.log('Listening at http://%s:%s', host, port);
});

