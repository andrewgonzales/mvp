var app = angular.module('spacesApp', []);
var endpoint ='https://data.sfgov.org/resource/w969-5mn4.json';

// app.controller('SpacesController', function($scope, $http) {
//   // $scope.spaces = [];
//   $http.get(endpoint)
//        .then(function(res){
//           $scope.spaces = res.data;
//         });
// });
console.log()
app.controller('SpacesController', function($scope, $http) {
  // $scope.spaces = [];
  $scope.spaces = [];


  // $http.get(endpoint)
  //      .then(function(res){
  //         for(var i = 0; i<50; i++){
  //           // debugger;
  //           var pertinent = {};
  //           pertinent = {
  //             id: i,
  //             address: res.data[i].yr_inst,
  //             racks: res.data[i].racks,
  //             spots: res.data[i].spaces,
  //             coords: {latitude: Number(res.data[i].latitude.latitude), longitude: Number(res.data[i].latitude.longitude)}
  //           };
  //           $scope.spaces.push(pertinent);
  //         }

  //       });

  $http.get('/data')
    .then(function(res){
      for(var i = 0; i<126; i++){ //5% of dataset for loading purposes
        var pertinent = {};
        pertinent = {
          id: i,
          address: res.data[i].address,
          racks: res.data[i].racks,
          spots: res.data[i].spots,
          coords: res.data[i].coords
        };
        $scope.spaces.push(pertinent);
       
      }
    });

});

//want factory that outputs a marker fitting template in app.js

// {"placement":"SW","addr_num":"Bay Area Air Quality Management District (BAAQMD)","spaces":"4","racks":"2","yr_inst":"939 ELLIS ST","street_name":"ELLIS","yr_installed":"1997","mo_installed":"8","latitude":{"needs_recoding":false,"longitude":"-122.42177834","latitude":"37.78346622","human_address":"{\"address\":\"ELLIS\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}"}}