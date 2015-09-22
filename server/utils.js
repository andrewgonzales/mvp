var fs = require('fs');
var request = require('request');

exports.endpoint = 'https://data.sfgov.org/resource/w969-5mn4.json?$limit=3000';

exports.data = {};
exports.getData = function() {
  // console.log('In getData');
  request(exports.endpoint, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // console.log(body);
      fs.writeFile('../db/cityData.js', body, function(data){
        data = body;
      });
      exports.data = body;
    }
  });
};


exports.getData();