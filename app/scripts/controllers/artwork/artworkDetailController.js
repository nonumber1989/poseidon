'use strict';

var asgard = angular.module('asgard');

asgard.controller('ArtworkDetailController', ['$scope','$resource',function ($scope,$resource) {

    $scope.artworkDetailResource = $resource('api/artwork/artwork.json');
    $scope.artworkDetailResource.query(function(data){
        $scope.theArtwork = data;
    });

    $scope.tabsetResource = $resource('api/artwork/artworkDetail.json');
    $scope.tabsetResource.query(function(data){
        $scope.tabs = data;
    });
}]);