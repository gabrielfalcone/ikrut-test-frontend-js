'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ValuesCtrl
 * @description
 * # ValuesCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ValuesCtrl', function ($scope, $http, $log) {

    $scope.result = '';

    $scope.getValues = function() {

      $http.get('http://localhost:49224/api/values', { headers: { 'Authorization': 'Bearer '+$scope.token }})
      .then(
        function (response) {

          $scope.result = response.data;

        }, function (response) {

          $log.error(response);

        }
      );

    };

  });
