'use strict';

var asgard = angular.module('asgard');
asgard.controller('MessageDialogController', ['$scope','$log','$modal', '$modalInstance','selection', function ($scope,$log,$modal, $modalInstance,selection) {

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}]);