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
    $scope.imageUrl = [];
    $scope.imageUrl[0] = 'http://localhost:3000/small';
    $scope.imageUrl[1] = 'http://localhost:3000/4k';
    $scope.imageUrl[2] = 'http://localhost:3000/5k';
    $scope.imgNo = 5;
    $scope.isLoading = false;
    $scope.difftime = 0;

    $scope.loadImg = function(){
      var start = new Date().getUTCMilliseconds();


      $scope.isLoading = true;
      $scope.images = [];
      for(var i = 0 ; i < parseInt($scope.imgNo) ; i++){
        var temp = {};
        temp.url = $scope.imageUrl[Math.floor(Math.random()*3)]+"?dummy="+(new Date().getUTCMilliseconds())+i;
        $scope.images.push(temp);
      }
      $scope.isLoading = false;
      var end = new Date().getUTCMilliseconds();
      $scope.difftime = end - start;
      console.log("start : "+start);
      console.log("end : "+end);
    }
  });
