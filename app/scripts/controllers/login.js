'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($uibModal, $document, $log, LoginSvc) {
    
    var $ctrl = this;
    $ctrl.userName = '';

    $ctrl.open = function (size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/login.html',
        controller: 'LoginModalCtrl',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem
      });

      modalInstance.result.then(function () {
        $log.info('Login successed, current user: ' + LoginSvc.currentUserName());
      }, function () {
        $log.info('Login canceled');
      });
    };
  
  })

  .controller('LoginModalCtrl', function ($scope, $window, $location, $uibModalInstance, LoginSvc) {
    
    $scope.user = '';
    $scope.password = '';

    var $ctrl = this;

    $ctrl.login = function () {
      
      LoginSvc.login($scope.user, $scope.password, function() {

        $uibModalInstance.close();
        $window.alert('Login successeded!');
        $location.path('/login-success');

      }, function() {

        $window.alert('User or Password are invalid :(\n\nPlease verify them.');

      });

    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss();
    };

  });
