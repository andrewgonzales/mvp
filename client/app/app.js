angular.module('bikeParking', ['google-maps'])
.controller('BikeController', function($scope){
  $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
});
