'use strict';

var userServices = angular.module('userServices', ['ngResource']);
var accountServices = angular.module('accountServices', ['ngResource']);
var transactionServices = angular.module('transactionServices', ['ngResource']);

userServices.factory('Users', ['$resource', '$rootScope',
  function($resource, $rootScope) {
    return $resource($rootScope.backendURL + '/api/users/:userId');
  }])

accountServices.factory('Accounts', ['$resource', '$rootScope',
  function($resource, $rootScope) {
    return $resource($rootScope.backendURL + '/api/accounts/:accountId');
  }])

transactionServices.factory('Transactions', ['$resource', '$rootScope',
  function($resource, $rootScope) {
    return $resource($rootScope.backendURL + '/api/transactions/:transactionId');
  }])
