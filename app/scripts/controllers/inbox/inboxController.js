'use strict';

var asgard = angular.module('asgard');

asgard.controller('InboxController', ['$scope', '$resource','$modal','$log', function ($scope, $resource,$modal,$log) {

    $scope.openMessageDialog = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'messageDialog.html',
            controller: 'MessageDialogController',
            size: size,
            resolve: {
                selection :function(){
                    return $scope.selection;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}])