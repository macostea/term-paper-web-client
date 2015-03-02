'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('LoginCtrl', function ($scope, $http, $rootScope) {
    $scope.login = function(user) {
      $http.post($rootScope.backendURL + '/api/login', user).
      success(function(data, status, headers, config) {
        $scope.loginMessage = data;
      }).
      error(function(data, status, headers, config) {
        $scope.loginMessage = data;
      });
    };
  });
