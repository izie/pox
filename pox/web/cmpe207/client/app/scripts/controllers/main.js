'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.imageUrl = 'http://10.0.0.254:3000/small';

    $scope.loadImg = function(val){
      if(val == 'small'){
        $scope.imageUrl = 'http://10.0.0.254:3000/small';
      }else if(val == '4k'){
        $scope.imageUrl = 'http://10.0.0.254:3000/4k';
      }else if(val == '5k'){
        $scope.imageUrl = 'http://10.0.0.254:3000/5k';
      }
    }
  });
