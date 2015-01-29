'use strict';

var asgard = angular.module('asgard');

asgard.controller('HostController', ['$scope','$resource',function ($scope,$resource) {
    $scope.hostResource = $resource('api/location/hosts.json');
    $scope.hostResource.query(function(result){
        $scope.hosts = result;
    });
    $scope.sponsorResource = $resource('api/location/sponsors.json');
    $scope.sponsorResource.query(function(result){
        $scope.sponsors = result;
    });
}]);
