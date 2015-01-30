'use strict';

var asgard = angular.module('asgard');
asgard.controller('AsgardController', ['$scope','$resource','$modal', '$log','$translate',function ($scope,$resource,$modal, $log,$translate) {

  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
    $scope.gatheringResource = $resource('api/people/account.json');
    $scope.gatheringResource.get(function(data){
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

    $scope.messagePopover = '<a>Hello, World!</a>';
    $scope.messagePopoverTitle = 'Title';

    $scope.selection = {id:"nonumber1989"};
    $scope.openCollectionDialog = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'collectionDialog.html',
            controller: 'CollectionDialogController',
            size: size,
            resolve: {
                collections: function () {
                    return $scope.collections;
                },
                selection :function(){
                    return $scope.selection;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            console.log(selectedItem+'---collectionDialog');
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

}]);


