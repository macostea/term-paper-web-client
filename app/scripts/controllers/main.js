'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('MainCtrl', function ($scope, Users, Accounts, Transactions) {
    $scope.users = Users.query();
    $scope.accounts = Accounts.query();
    $scope.transactions = Transactions.query();
  });
