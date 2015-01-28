'use strict';

var asgard = angular.module('asgard');

asgard.controller('TopicFollowerController', ['$scope','$resource',function ($scope,$resource) {

    $scope.followerResource = $resource('api/people/followers.json');
    $scope.followerResource.query(function(data){
        $scope.followers = data;
    });
}]);
