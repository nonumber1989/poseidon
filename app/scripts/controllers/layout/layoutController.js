'use strict';

var asgard = angular.module('asgard');
asgard.controller('LayoutController', ['$scope','$resource','$http','authService',function ($scope,$resource,$http, authService) {
    $scope.user={username:"seven",password:"seven"};
    $scope.test = $resource('http://localhost:9090/warship/memo');
    $scope.submit = function() {
//        $http.post('http://localhost:9090/warship/user/signIn').success(function() {
//            authService.loginConfirmed();
//        });
        $scope.test.query(function(result){
console.log(result+'------');
        });
    }
}]);
