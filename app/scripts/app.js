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
asgard.config(function($stateProvider, $urlRouterProvider,$resourceProvider,$translateProvider,navigationProvider){


  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'german'
  });
  $translateProvider.translations('de', {
    TITLE: 'Hallo',
    FOO: 'Dies ist ein Paragraph.',
    BUTTON_LANG_EN: 'englisch',
    BUTTON_LANG_DE: 'deutsch'
  });
  $translateProvider.preferredLanguage('de');
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home")
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/layout/cover.html",
            controller:"LayoutController"
        });
  navigationProvider.setNavigationUrl('api/navigation.json');
});
asgard.run(function(navigation){
  navigation.setUpNavigation();
});
