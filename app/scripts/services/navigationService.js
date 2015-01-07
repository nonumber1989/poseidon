'use strict';
var asgard = angular.module('asgard');
asgard.provider('navigation', function ($stateProvider) {
  var navigationUrl;
  this.$get = function($resource, $state){
    return {
      setUpNavigation: function(){
        var navigationResource = $resource(navigationUrl);
        navigationResource.get(function(result){
          for (var routeName in result) {
            if (!$state.get(routeName)) {
              $stateProvider.state(routeName, result[routeName]);
            }
          }
        },function(error){

        });
      }
    }
  };
    this.setNavigationUrl = function (url) {
      navigationUrl = url;
    }
  });
