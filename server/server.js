var express = require('express');
var utils = require('./utils');
var fs = require('fs');
var Space = require('../db/models/space');

var app = express();
app.use(express.static(__dirname + '/../client'));



utils.saveData();

app.get('/', function (req, res) {
  // utils.saveData();
  utils.loadFromDB(req,res);
  // res.send('index.html');
});

app.get('/data', function (req, res){
  utils.loadFromDB(req,res);
});




var port = 8800;
var server = app.listen(port, 'localhost', function () {
  var host = server.address().address;
  console.log('Listening at http://%s:%s', host, port);
});



//GEOCODING API KEY
//AIzaSyAK0J2yp4RQDY6gLVAINzDd_oKKzR5TfFc
// http://maps.googleapis.com/maps/api/geocode/output?parameters