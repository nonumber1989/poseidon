'use strict';

/**
 * @ngdoc function
 * @name asgardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the asgardApp
 */
var asgard = angular.module('asgard');

asgard.controller('MagazineController', ['$scope','$resource',function ($scope,$resource) {

    $scope.magazineResource = $resource('api/magazine');
    $scope.magazineResource.query(function(data){
        $scope.magazines = data;
    });
}]);
