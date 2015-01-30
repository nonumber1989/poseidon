'use strict';

var asgard = angular.module('asgard');
asgard.controller('CollectionCreateDialogController', ['$scope','$log','$modal', '$modalInstance', 'creation', function ($scope,$log,$modal, $modalInstance, creation) {
    $scope.ok = function () {
        $modalInstance.close();
//        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);