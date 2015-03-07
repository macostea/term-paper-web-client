'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:AdministerAccountCtrl
 * @description
 * # AdministerAccountCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('AdministerAccountCtrl', function ($scope, $modal, $location, Accounts, UserAccountsService) {
    $scope.account = UserAccountsService.getAccount();
  });
