'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:UserManageAccountCtrl
 * @description
 * # UserManageAccountCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('UserManageAccountCtrl', function ($scope, $localStorage, Accounts, UserAccountsService) {
    if (!$localStorage.user || $localStorage.user.type !== 'default') {
      $location.path('/login');
    }

    $scope.account = UserAccountsService.getAccount();
    $scope.pastTransactions = Accounts.transactions({accountId: $scope.account._id});
  });
