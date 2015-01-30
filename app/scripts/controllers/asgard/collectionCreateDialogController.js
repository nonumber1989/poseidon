'use strict';

var asgard = angular.module('asgard');
asgard.controller('CollectionCreateDialogController', ['$scope','$log','$modal', '$modalInstance', 'creation', function ($scope,$log,$modal, $modalInstance, creation) {
    $scope.collection = {};
    $scope.save = function () {
        $modalInstance.close();
        console.log($scope.collection.title)
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);