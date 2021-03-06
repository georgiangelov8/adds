'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute','ngResource'
]);

app.constant('baseServiceUrl','http://softuni-ads.azurewebsites.net/api/');
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/',{
    templateUrl: 'templates/home.html',
    controller:'HomeCtrl'
  });
  $routeProvider.when( '/login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });
  $routeProvider.when( '/user/ads/publish', {
    templateUrl: 'templates/publishAdd.html',
    controller: 'PublishAddCtrl'
  });
  $routeProvider.when( '/user/ads', {
    templateUrl: 'templates/myAds.html',
    controller: 'MyAddsCtrl'
  });
  $routeProvider.when( '/register', {
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  });
}]);
