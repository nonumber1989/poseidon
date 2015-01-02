'use strict';

var asgard = angular.module('asgard');

asgard.controller('SubjectController', ['$scope','$resource',function ($scope,$resource) {

    $scope.subjectResource = $resource('api/subject/theSubjects.json');
    $scope.subjectResource.query(function(data){
        $scope.subjects = data;
    });
    $scope.favoriteSubjects =[];
    $scope.favoriteSubjectResource = $resource('api/subject/favoriteSubjects.json');
    $scope.favoriteSubjectResource.query(function(data){
        $scope.favoriteSubjects = data;
    });

    $scope.sortableOptions = {
        containment: '#sortable-container'
    };
}]);
