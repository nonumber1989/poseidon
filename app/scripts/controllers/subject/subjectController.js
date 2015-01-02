'use strict';

var asgard = angular.module('asgard');

asgard.controller('SubjectController', ['$scope','$resource',function ($scope,$resource) {

    $scope.subjectResource = $resource('api/subject/theSubjects.json');
    $scope.subjectResource.query(function(data){
        $scope.subjects = data;
    });
    
}]);
