'use strict';

var asgard = angular.module('asgard');

asgard.controller('TopicController', ['$scope','$resource',function ($scope,$resource) {

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

    $scope.pinSubject = function(subject){
        $scope.favoriteSubjects.push(subject);
    };
    $scope.cancelFollowSubject = function(subject){
        var index = $scope.favoriteSubjects.indexOf(subject);
        if (index > -1) {
            $scope.favoriteSubjects.splice(index, 1);
        }
    };
    $scope.topFollowSubject = function(subject){

        var index = $scope.favoriteSubjects.indexOf(subject);
        if (index > -1) {
            $scope.favoriteSubjects.splice(index, 1);
        }
        $scope.favoriteSubjects.splice(0, 0, subject);

    };
}]);
