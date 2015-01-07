'use strict';
var asgard = angular.module('asgard');
asgard.provider('i18n', function ($translateProvider) {
  var i18nUrl;
  this.$get = function($resource){
    return {
      setUpI18n: function(){
        var i18nResource = $resource(i18nUrl);
        i18nResource.get(function(result){
          //$translateProvider.translations('en',{});
        },function(error){

        });
      }
    }
  };
  this.setI18nUrl = function (url) {
    i18nUrl = url;
  }
});
