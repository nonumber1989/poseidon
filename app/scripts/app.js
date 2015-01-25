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
    'http-auth-interceptor',
    'base64',
    'infinite-scroll',
    'angularFileUpload',
    'pascalprecht.translate'
  ])
asgard.config(['$stateProvider', '$urlRouterProvider','$resourceProvider','$translateProvider','navigationProvider','i18nProvider',function($stateProvider, $urlRouterProvider,$resourceProvider,$translateProvider,navigationProvider,i18nProvider){
  $translateProvider.useStaticFilesLoader({
    prefix: '/api/languages/',
    suffix: '.json'
  });
  navigationProvider.setNavigationUrl('api/navigation.json');
  //var i18nUrls = ['api/i18n/en.json','api/i18n/zh.json'];
  //i18nProvider.setI18nUrlArray(i18nUrls);
  $translateProvider.preferredLanguage('zh');
  $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/layout/cover.html",
        controller:"LayoutController"
      });
}]);
asgard.run([ '$rootScope', '$state', '$stateParams','navigation','i18n','$http',function ($rootScope,  $state,   $stateParams,navigation,i18n,$http) {
	  navigation.setUpNavigation();
      //i18n.setUpI18nByArray();
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
//        $http.defaults.headers.common.Authorization = 'Basic c2V2ZW46c2V2ZW4=';
    }
  ]
);
