var userServices = angular.module('userServices', ['ngResource']);
var accountServices = angular.module('accountServices', ['ngResource']);
var transactionServices = angular.module('transactionServices', ['ngResource']);

userServices.factory('Users', ['$resource',
  function($resource) {
    return $resource('https://term-paper-backend.herokuapp.com/api/users/:userId');
  }])

accountServices.factory('Accounts', ['$resource',
  function($resource) {
    return $resource('https://term-paper-backend.herokuapp.com/api/accounts/:accountId');
  }])

transactionServices.factory('Transactions', ['$resource',
  function($resource) {
    return $resource('https://term-paper-backend.herokuapp.com/api/transactions/:transactionId');
  }])
