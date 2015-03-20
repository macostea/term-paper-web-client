'use strict';

/**
 * @ngdoc function
 * @name termPaperClientApp.controller:AdministerUsersCtrl
 * @description
 * # AdministerUsersCtrl
 * Controller of the termPaperClientApp
 */
angular.module('termPaperClientApp')
  .controller('AdministerUsersCtrl', function ($scope, $modal, $location, $localStorage, Users, UserAccountsService) {
    if (!$localStorage.user || $localStorage.user.type !== 'admin') {
      $location.path('/login');
    }

    $scope.users = Users.query();

    $scope.delete = function(userToDelete) {
      for (var i = $scope.users.length; i--;) {
        var user = $scope.users[i];
        if (user._id === userToDelete._id) {
          user.$delete({userId: user._id});
          $scope.users.splice(i, 1);
        }
      }
    };

    $scope.openAddUserDialog = function() {
      $scope.formActionName = 'Add';
      $scope.modalInstance = $modal.open({
        templateUrl: 'views/administer/addUserForm.html',
        controller: 'AdministerUsersCtrl',
        scope: $scope
        });
    };

    $scope.openUpdateUserDialog = function(user) {
      $scope.user = angular.copy(user);
      $scope.formActionName = 'Update';
      $scope.modalInstance = $modal.open({
        templateUrl: 'views/administer/updateUserForm.html',
        controller: 'AdministerUsersCtrl',
        scope: $scope
        });
    };

    $scope.register = function(user) {
      var newUserResource = new Users();
      newUserResource.name = user.name;
      newUserResource.email = user.email;
      newUserResource.password = user.password;

      newUserResource.$save(function(updatedUser) {
        $scope.$parent.users.push(updatedUser);
        $scope.dismissModal(updatedUser)
      });
    };

    $scope.update = function() {
      Users.update({userId: $scope.user._id}, $scope.user, function() {
        for (var i = $scope.$parent.users.length; i--;) {
          if ($scope.$parent.users[i]._id == $scope.user._id) {
            $scope.$parent.users[i] = $scope.user;
            break;
          }
        }
        $scope.modalInstance.dismiss();
      });
    };

    $scope.dismissModal = function() {
      $scope.modalInstance.dismiss();
    };

    $scope.openAccountsGridForUser = function(user) {
      Users.accounts({userId: user._id}, function(accounts) {
        $scope.accounts = accounts;
        $scope.modalInstance = $modal.open({
          templateUrl: 'views/administer/userAccountsGrid.html',
          controller: 'AdministerUsersCtrl',
          scope: $scope
        });
      });
    };

    $scope.openAccountViewForAccount = function(account) {
      $scope.dismissModal();

      UserAccountsService.setAccount(account);
      $location.path('/administer/account');
    }
  });
