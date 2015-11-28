"use strict"
angular.module('angularApp')
.controller('HomeCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);
