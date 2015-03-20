'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('LoginCtrl', function ($scope, Users, $rootScope, $localStorage, $location) {
    $scope.login = function(user) {
      Users.login(user, function(data) {
        $localStorage.token = data.token;
        $localStorage.user = data.user;
        if (data.user.type === 'admin') {
          $location.path('/administer/users');
        } else {
          $location.path('/users/accounts');
        }
      });
    };
  });
