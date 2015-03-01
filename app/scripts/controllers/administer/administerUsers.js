'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:AdministerUsersCtrl
 * @description
 * # AdministerUsersCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('AdministerUsersCtrl', function ($scope, $http, Users) {
    $scope.users = Users.query();

    $scope.delete = function(userId) {
      for (var i = $scope.users.length; i--;) {
        var user = $scope.users[i];
        if (user._id === userId) {
          user.$delete();
          $scope.users.splice(i, 1);
        }
      }
    }
  });
