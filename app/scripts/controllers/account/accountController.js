'use strict';

var asgard = angular.module('asgard');
asgard.controller('AccountController', ['$scope','$resource', function ($scope,$resource) {
    $scope.accountResource = $resource('api/people/account.json');
    $scope.accountResource.get(function(data){
        $scope.currentAccount = data;
    });

    $scope.expertResource = $resource('api/people/experts.json');
    $scope.expertResource.query(function(data){
        $scope.experts = data;
    });
}]);