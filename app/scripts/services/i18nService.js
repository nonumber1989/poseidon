'use strict';
var asgard = angular.module('asgard');
asgard.provider('i18n', function ($translateProvider) {
  var i18nUrl;
  var i18nUrlArray;
  this.$get = function($resource){
    return {
      setUpI18n: function(){
        var i18nResource = $resource(i18nUrl);
        i18nResource.get(function(result){
          $translateProvider.translations(result.language,result.i18n);
        },function(error){
		  
        });
      },
	  setUpI18nByArray: function(){
	  var i18nResource;
	  for(var url in i18nUrlArray){
	    i18nResource = $resource(url);
        i18nResource.get(function(result){
          $translateProvider.translations(result.language,result.i18n);
        },function(error){

        });
	  }
      }
    }
  };
  this.setI18nUrl = function (url) {
    i18nUrl = url;
  };
    this.setI18nUrlArray = function (urls) {
    i18nUrlArray = urls;
  };
});
