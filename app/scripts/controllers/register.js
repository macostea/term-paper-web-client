'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    $scope.register = function (user) {
      $http.post('https://term-paper-backend-macostea.c9.io/register', user).
      success(function(data, status, headers, config) {
        $scope.registerMessage = data;
      }).
      error(function(data, status, headers, config) {
        $scope.registerMessage = data;
      });
    }
  });
