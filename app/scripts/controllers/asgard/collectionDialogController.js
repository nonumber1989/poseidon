'use strict';

var asgard = angular.module('asgard');
asgard.controller('CollectionDialogController', ['$scope','$log','$modal', '$modalInstance', 'collections','selection', function ($scope,$log,$modal, $modalInstance, collections,selection) {

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


    $scope.openCreateDialog = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'collectionCreateDialog.html',
            controller: 'CollectionCreateDialogController',
            size: size,
            resolve: {
                creation: function () {
                    return {id:"sevenup"};
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            console.log(selectedItem+'---collectionCreateDialog');
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

}]);