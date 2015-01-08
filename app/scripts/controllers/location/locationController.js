'use strict';

var asgard = angular.module('asgard');

asgard.controller('LocationController', ['$scope','$resource',function ($scope,$resource) {
    $scope.gatheringResource = $resource('api/location/gathering.json');
    $scope.gatheringResource.query(function(data){
        $scope.gatherings = data;
    });
}]);
