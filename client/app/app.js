// var bikeApp = angular.module('bikeApp', ['google-maps']);
var bikeApp = angular.module('bikeApp', ['uiGmapgoogle-maps']);

bikeApp.controller('BikeController', function($scope){
  $scope.map = {center: {latitude: 37.779, longitude: -122.419}, zoom: 14}; //sf city hall to start
  $scope.testMarker = {
    id: 0,
    coords: {latitude: 37.779, longitude: -122.419},
    click: console.log('clicked a marker')
  };
});
