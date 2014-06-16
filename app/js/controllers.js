'use strict';

/* Controllers */

var codingAdminApp = angular.module('codingAdminApp', []);

codingAdminApp.controller('TestListCtrl', function($scope) {

  $scope.tests = [
    {'name': 'Java Test'},
    {'name': 'Python Test'}
  ];
});
