'use strict';

var asgard = angular.module('asgard');
asgard.controller('LayoutController', ['$scope','$resource','$http','$state','authService','$base64',function ($scope,$resource,$http, $state,authService,$base64) {
    $scope.user={email:"seven",password:"seven"};
    $scope.testResource = $resource('http://localhost:9090/warship/user');

    $scope.encoded = $base64.encode($scope.user.email+':'+$scope.user.password);
    $scope.decoded = $base64.decode('c2V2ZW46c2V2ZW4=');

    $scope.signIn = function() {

//        $http.defaults.headers.common.Authorization = 'Basic c2V2ZW46c2V2ZW4=';
//        $http.post('http://localhost:9090/warship/user/signIn').success(function() {
//            authService.loginConfirmed();
//        });
        $state.transitionTo('asgard');
    };
    $scope.diegstResource = $resource('api/digest/digest.json');
    $scope.diegstResource.query(function(data){
        $scope.digests = data;
        $scope.currentDigest = $scope.digests[0];
    });

    $scope.showCurrent = function(current){
        $scope.currentDigest = current;
    };
    $scope.defaultCurrent = function(){
        $scope.currentDigest = $scope.digests[0];
    };
    $scope.open = function(digest){

    }
}]);
