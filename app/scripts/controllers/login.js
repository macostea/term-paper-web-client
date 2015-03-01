'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.login = function(user) {
      $http.post('https://term-paper-backend.herokuapp.com/api/login', user).
      success(function(data, status, headers, config) {
        $scope.loginMessage = data;
      }).
      error(function(data, status, headers, config) {
        $scope.loginMessage = data;
      });
    };
  });
