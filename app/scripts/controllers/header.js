'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }
  });
