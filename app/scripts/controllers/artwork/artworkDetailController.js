'use strict';

var asgard = angular.module('asgard');

asgard.controller('ArtworkDetailController', ['$scope','$resource',function ($scope,$resource) {

    $scope.artworkDetailResource = $resource('api/artwork/artwork.json');
    $scope.artworkDetailResource.get(function(data){
        $scope.theArtwork = data;
    });
}]);