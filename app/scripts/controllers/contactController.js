'use strict';

var asgard = angular.module('asgard');
asgard.controller('ContactController', ['$scope', '$log', '$resource', function ($scope, $log, $resource) {
    var musicResource = $resource('https://api.douban.com/v2/music/search?q=:keyword', {keyword:'@keyword'});
    musicResource.get({keyword:'love'},function(result){
        $scope.musics = result.musics;
    });
}]);
