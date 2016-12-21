'use strict';

/**
 * @ngdoc function
 * @name frontendApp.service:LoginSvc
 * @description
 * # LoginSvc
 * Service of the frontendApp
 */
angular.module('frontendApp')
  .service('LoginSvc', function($http) {

    var currentUserName = null;

    this.login = function (username, password, successCallback, failureCallback) {

      /*
      $http({
          method: 'POST',
          url: 'http://localhost:49224/token',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: function(obj) {
              var str = [];
              for(var p in obj) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
              }
              return str.join('&');
          },
          data: { 'grant_type': 'password', 'username': username, 'password': password }
      })
      */
      $http.post('http://localhost:49224/api/login', { 'username': username, 'password': password })
      .then(
        function (response) {
          if(successCallback) {
            successCallback(response.data);
          }
          currentUserName = response.data;
        }, function (response) {
          if(failureCallback) {
            failureCallback(response.data);
          }
          currentUserName = null;
        }
      );
    
    };

    this.currentUserName = function () {
      return currentUserName;
    };
  });