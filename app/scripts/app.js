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
    'ngStorage',
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
  .config(function ($routeProvider, $httpProvider) {
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
      .when('/users/accounts', {
        templateUrl: 'views/users/userAccounts.html',
        controller: 'UserAccountsCtrl'
      })
      .when('/users/account', {
        templateUrl: 'views/users/userManageAccount.html',
        controller: 'UserManageAccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          if ($localStorage.token) {
            config.headers.Authorization = 'Bearer ' + $localStorage.token;
          }

          return config;
        },
        'responseError': function(response) {
          if (response.status === 401 || response.status === 403) {
            $location.path('/login');
          }
          return $q.reject(response);
        }
      };
    }]);
  })
  .run(function($rootScope) {
    //$rootScope.backendURL = "https://term-paper-backend-macostea.c9.io";
    $rootScope.backendURL = "https://secure-transfer.tutora.ro";
    //$rootScope.backendURL = "https://term-paper-backend.herokuapp.com";
  });
