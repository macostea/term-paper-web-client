'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('RegisterCtrl', function ($scope, $http, $rootScope) {
    $scope.register = function (user) {
      $http.post($rootScope.backendURL + '/api/register', user).
      success(function(data, status, headers, config) {
        $scope.registerMessage = data;
      }).
      error(function(data, status, headers, config) {
        $scope.registerMessage = data;
      });
    }
  });
