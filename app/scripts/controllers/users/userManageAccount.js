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
    $scope.account = UserAccountsService.getAccount();
    $scope.pastTransactions = Accounts.transactions({accountId: $scope.account._id});
  });
