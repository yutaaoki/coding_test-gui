'use strict';

/* Controllers */

var codingAdminControllers = angular.module('codingAdminControllers', []);


codingAdminControllers.controller('TestListCtrl', function($scope, $http, $log) {

//$scope.tests = [{"name" : 'empty'}]

  $http.get('./data/tests.json').success(function(data) {
      $log.log(data);
      $scope.tests = data;
  }).
  error(function(data, status,headers, config){
      $log.log(data + '|' +status);   
  });

});
