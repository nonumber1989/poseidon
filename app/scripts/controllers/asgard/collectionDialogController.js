'use strict';

var asgard = angular.module('asgard');
asgard.controller('CollectionDialogController', ['$scope','$modal', '$modalInstance', 'collections', function ($scope,$modal, $modalInstance, collections) {

    $scope.collections = collections;
    $scope.selected = {
        item: $scope.collections[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };


}]);