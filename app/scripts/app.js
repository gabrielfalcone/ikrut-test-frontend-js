'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login-success', {
        templateUrl: 'views/login-success.html',
        controller: 'LoginSuccessCtrl',
        controllerAs: 'login-success'
      })
      .when('/values', {
        templateUrl: 'views/values.html',
        controller: 'ValuesCtrl',
        controllerAs: 'values'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
