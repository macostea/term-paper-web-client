'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:UserAccountsCtrl
 * @description
 * # UserAccountsCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('UserAccountsCtrl', function ($scope, $localStorage, $location, Users, UserAccountsService) {
    if (!$localStorage.user || $localStorage.user.type !== 'default') {
      $location.path('/login');
    }

    Users.accounts({userId: $localStorage.user._id}, function(accounts) {
      $scope.accounts = accounts;
    });

    $scope.openAccountViewForAccount = function(account) {
      UserAccountsService.setAccount(account);
      $location.path('/users/account');
    }
  });
