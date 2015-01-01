/**
 * Created by seven on 2014/10/28.
 */
var asgard = angular.module('asgard');
asgard.controller('AsgardController', ['$scope','$resource',function ($scope,$resource) {
    $scope.accountResource = $resource('api/people/account.json');
    $scope.accountResource.get(function(data){
        $scope.currentAccount = data;
    });

    $scope.subjectsResource = $resource('api/subject/subjects.json');
    $scope.subjectsResource.query(function(data){
        $scope.subjects = data;
    });
}]);