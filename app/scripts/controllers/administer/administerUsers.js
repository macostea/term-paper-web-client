'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:AdministerUsersCtrl
 * @description
 * # AdministerUsersCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('AdministerUsersCtrl', function ($scope, $http, $timeout, Users) {
    $scope.users = Users.query();

    $scope.delete = function(userId) {
      for (var i = $scope.users.length; i--;) {
        var user = $scope.users[i];
        if (user._id === userId) {
          user.$delete({userId: user._id});
          $scope.users.splice(i, 1);
        }
      }
    }

    $scope.register = function(user) {
      var newUserResource = new Users();
      newUserResource.name = user.name;
      newUserResource.email = user.email;
      newUserResource.password = user.password;

      newUserResource.$save(function(updatedUser) {
        $scope.users.push(updatedUser);
      });
    }
  });
