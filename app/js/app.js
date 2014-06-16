'use strict';


// Declare app level module which depends on filters, and services
angular.module('codingAdminApp', [
  'ngRoute',
  'codingAdminControllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',{
            templateUrl: 'partials/main.html',
            controller: 'TestListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
