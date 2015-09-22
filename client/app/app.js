var bikeApp = angular.module('bikeApp', ['uiGmapgoogle-maps', 'spacesApp']);

bikeApp.controller('BikeController', function($scope){
  $scope.map = {center: {latitude: 37.779, longitude: -122.419}, zoom: 14}; //sf city hall to start
  $scope.testMarker = {
    id: 0,
    coords: {latitude: 37.779, longitude: -122.419},
  };

  $scope.testMarkerList = [
    {
    id: 1,
    coords: {latitude: 37.779, longitude: -122.419}
    },

    {
    id: 2,
    coords: {latitude: 37.779, longitude: -122.439}
    },

     {
    id: 3,
    coords: {latitude: 37.779, longitude: -122.459}
    }
  ];

});
