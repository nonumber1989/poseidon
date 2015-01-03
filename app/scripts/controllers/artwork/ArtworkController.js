'use strict';

var asgard = angular.module('asgard');

asgard.controller('ArtworkController', ['$scope','$resource','$timeout',function ($scope,$resource,$timeout) {
    $scope.interval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    };


    $scope.artworkResource = $resource('api/artwork/artwork.json');
    $scope.artworkResource.query(function(data){
        $scope.artworks = data;
    });
}]);