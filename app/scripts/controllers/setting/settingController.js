'use strict';

var asgard = angular.module('asgard');

asgard.controller('SettingController', ['$scope','$resource','$window',function ($scope,$resource,$window) {

    $scope.tabsetResource = $resource('api/setting/tabset.json');
    $scope.tabsetResource.query(function(data){
        $scope.tabs = data;
    });
    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
}]);
