'use strict';

/**
 * @ngdoc overview
 * @name jsMytodoApp
 * @description
 * # jsMytodoApp
 *
 * Main module of the application.
 */
var jsMytodoApp = angular.module('jsMytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ]);

  jsMytodoApp.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('ls');
  });
