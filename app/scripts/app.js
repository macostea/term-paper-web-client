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
    'transactionServices'
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
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/administer/users', {
        templateUrl: 'views/administer/administerUsers.html',
        controller: 'AdministerUsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
