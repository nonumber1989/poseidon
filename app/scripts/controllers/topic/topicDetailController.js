'use strict';

var asgard = angular.module('asgard');

asgard.controller('TopicDetailController', ['$scope','$resource',function ($scope,$resource) {

    $scope.subjectResource = $resource('api/subject/theSubjects.json');
    $scope.subjectResource.query(function(data){
        $scope.subjects = data;
        $scope.subject = data[0];
    });
}]);
