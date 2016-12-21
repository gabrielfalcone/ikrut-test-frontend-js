'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginSuccessCtrl
 * @description
 * # LoginSuccessCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginSuccessCtrl', function ($scope, LoginSvc) {
    
    $scope.currentUserName = LoginSvc.currentUserName();
  
  });
