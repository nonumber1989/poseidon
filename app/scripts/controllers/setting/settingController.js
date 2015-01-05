'use strict';

var asgard = angular.module('asgard');

asgard.controller('SettingController', ['$scope','$resource','$stateParams','$window',function ($scope,$resource,$stateParams,$window) {

    $scope.tabsetResource = $resource('api/setting/tabset.json');
    $scope.tabsetResource.query(function(data){
        $scope.tabs = data;
        angular.forEach($scope.tabs, function(tab){
            if(tab.field == $stateParams.status){
                tab.active = true;
            }
        });
    });
    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
}]);
