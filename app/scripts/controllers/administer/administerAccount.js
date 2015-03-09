'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:AdministerAccountCtrl
 * @description
 * # AdministerAccountCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('AdministerAccountCtrl', function ($scope, $http, Accounts, UserAccountsService, Transactions) {
    $scope.account = UserAccountsService.getAccount();
    $scope.pastTransactions = Accounts.transactions({accountId: $scope.account._id});

    $scope.updateTransactionStatus = function(transaction, status) {
      Transactions.updateStatus( {transactionId: transaction._id}, {status: status} );
      transaction.status = status;
    }
  });
