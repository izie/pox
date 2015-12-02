'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.images = [];
    $scope.imageUrl = 'http://10.0.0.254:3000/api/v1/image/';
    $scope.imgNo = 5;
    $scope.isLoading = false;
    $scope.difftime = 0;

    $scope.loadImg = function(){
      var start = new Date().getUTCMilliseconds();


      $scope.isLoading = true;
      $scope.images = [];
      for(var i = 0 ; i < parseInt($scope.imgNo) ; i++){
        var temp = {};
        temp.url = $scope.imageUrl+(i%11+1)+"?id="+(new Date().getUTCMilliseconds())+i;
        $scope.images.push(temp);
      }
      $scope.isLoading = false;
      var end = new Date().getUTCMilliseconds();
      $scope.difftime = end - start;
    }
  });
