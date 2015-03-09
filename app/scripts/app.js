'use strict';

/**
 * @ngdoc overview
 * @name termPaperClientApp
 * @description
 * # termPaperClientApp
 *
 * Main module of the application.
 */
angular
  .module('termPaperClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'validation.match',
    'userServices',
    'accountServices',
    'transactionServices',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/administer/users', {
        templateUrl: 'views/administer/administerUsers.html',
        controller: 'AdministerUsersCtrl'
      })
      .when('/administer/account', {
        templateUrl: '../views/administer/administerAccount.html',
        controller: 'AdministerAccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    //$rootScope.backendURL = "https://term-paper-backend-macostea.c9.io";
    $rootScope.backendURL = "https://term-paper-backend.herokuapp.com";
  });
