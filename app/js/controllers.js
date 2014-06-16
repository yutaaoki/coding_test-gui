'use strict';

/* Controllers */

var codingAdminApp = angular.module('codingAdminApp', []);

codingAdminApp.controller('TestListCtrl', function($scope, $http, $log) {

//$scope.tests = [{"name" : 'empty'}]
  $log.log('hello');

  $http.get('./data/tests.json').success(function(data) {
      $log.log(data);
      $scope.tests = data;
  }).
  error(function(data, status,headers, config){
      $log.log(data + '|' +status);   
  });

});
