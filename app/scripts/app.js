'use strict';

/**
 * @ngdoc overview
 * @name asgardApp
 * @description
 * # asgardApp
 *
 * Main module of the application.
 */
var asgard =
  angular.module('asgard', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngImgCrop',
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    'infinite-scroll',
    'angularFileUpload',
    'pascalprecht.translate'
  ])
asgard.config(function($stateProvider, $urlRouterProvider,$resourceProvider,$translateProvider,navigationProvider,i18nProvider){
  navigationProvider.setNavigationUrl('api/navigation.json');
  var i18nUrls = ['api/i18n/en.json','api/i18n/de.json'];
  i18nProvider.setI18nUrlArray(i18nUrls);
  $translateProvider.preferredLanguage('de');
  $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/layout/cover.html",
        controller:"LayoutController"
      });
});
asgard.run(function(navigation,i18n){
  navigation.setUpNavigation();
  i18n.setUpI18nByArray();
});
