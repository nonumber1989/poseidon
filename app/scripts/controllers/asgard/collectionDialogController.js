'use strict';

var asgard = angular.module('asgard');
asgard.controller('CollectionDialogController', ['$scope','$log','$modal', '$modalInstance', 'collections','selection', function ($scope,$log,$modal, $modalInstance, collections,selection) {

    $scope.collections = collections;
    $scope.selected = {
        item: $scope.collections[0]
    };

    $scope.save = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    //dialog to create an new collection
    $scope.openCreateDialog = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'collectionCreateDialog.html',
            controller: 'CollectionCreateDialogController',
            size: size,
            //resolve the information
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