'use strict';

var asgard = angular.module('asgard');
asgard.controller('AsgardController', ['$scope','$resource','$modal', '$log',function ($scope,$resource,$modal, $log) {
    $scope.accountResource = $resource('api/people/account.json');
    $scope.accountResource.get(function(data){
        $scope.currentAccount = data;
    });

    $scope.subjectResource = $resource('api/subject/subjects.json');
    $scope.subjectResource.query(function(data){
        $scope.subjects = data;
    });

    $scope.collectionResource = $resource('api/collection/collections.json');
    $scope.collectionResource.query(function(data){
        $scope.collections = data;
    });


    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'collectionDialog.html',
            controller: 'CollectionDialogController',
            size: size,
            resolve: {
                collections: function () {
                    return $scope.collections;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

}]);


