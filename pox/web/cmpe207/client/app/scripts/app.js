'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularLazyImg'
  ])
  .config(function (lazyImgConfigProvider, $routeProvider) {


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
      .otherwise({
        redirectTo: '/'
      });
    var scrollable = document.querySelector('#scrollable');
    var start = new Date().getUTCMilliseconds();
    var difftime = 0;
    lazyImgConfigProvider.setOptions({
      offset: 100, // how early you want to load image (default = 100)
      errorClass: 'error', // in case of loading image failure what class should be added (default = null)
      successClass: 'success', // in case of loading image success what class should be added (default = null)
      onError: function(image){}, // function fired on loading error
      onSuccess: function(image){
        var end = new Date().getUTCMilliseconds();
        difftime = end - start;
        console.log("start : "+start);
        console.log("end : "+end);
      }, // function fired on loading success
      container: angular.element(scrollable) // if scrollable container is not $window then provide it here
    });
  });
