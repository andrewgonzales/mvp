var app = angular.module('spacesApp', []);
var endpoint ='https://data.sfgov.org/resource/w969-5mn4.json';

app.controller('SpacesController', function($scope, $http) {
  // $scope.spaces = [];
  $http.get(endpoint)
       .then(function(res){
          $scope.spaces = res.data;
        });
});

//want factory that outputs a marker fitting template in app.js
