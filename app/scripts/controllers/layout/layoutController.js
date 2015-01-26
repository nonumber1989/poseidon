'use strict';

var asgard = angular.module('asgard');
asgard.controller('LayoutController', ['$scope','$resource','$http','authService','$base64',function ($scope,$resource,$http, authService,$base64) {
    $scope.user={username:"seven",password:"seven"};
    $scope.testResource = $resource('http://localhost:9090/warship/user');

    $scope.encoded = $base64.encode($scope.user.username+':'+$scope.user.password);
    $scope.decoded = $base64.decode('c2V2ZW46c2V2ZW4=');

    $scope.signIn = function() {
        $http.defaults.headers.common.Authorization = 'Basic c2V2ZW46c2V2ZW4=';
        $scope.testResource.query(function(result){
            console.log($scope.decoded+'------nonumber1989');
            console.log($scope.encoded+'------nonumber198222229');
        });
//        $http.defaults.headers.common.Authorization = 'Basic c2V2ZW46c2V2ZW4=';
//        $http.post('http://localhost:9090/warship/user/signIn').success(function() {
//            authService.loginConfirmed();
//        });
    };
    $scope.artworkResource = $resource('api/artwork/artwork.json');
    $scope.artworkResource.query(function(data){
        $scope.artworks = data;
    });
}]);
