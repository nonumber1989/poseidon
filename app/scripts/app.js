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
asgard.config(['$stateProvider', '$urlRouterProvider', '$resourceProvider', '$translateProvider', 'i18nProvider', function($stateProvider, $urlRouterProvider, $resourceProvider, $translateProvider, i18nProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: '/api/languages/',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('zh');

  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/layout/home.html",
      controller: "LayoutController"
    })
    .state('about', {
      "url": "/about",
      "templateUrl": "../views/common/about.html",
      "controller": "AboutController"
    })
    .state('contact', {
      "url": "/contact",
      "templateUrl": "../views/common/contact.html",
      "controller": "ContactController"
    })
    .state('account', {
      "url": "/account/:id",
      "templateUrl": "views/account/account.html",
      "controller": "AccountController"
    })
    .state('setting', {
      "url": "/setting/:status",
      "templateUrl": "views/setting/setting.html",
      "controller": "SettingController"
    })
    .state('inbox', {
      "url": "/inbox",
      "templateUrl": "views/inbox/inbox.html",
      "controller": "InboxController"
    })
    .state('artwork', {
      "url": "/artwork",
      "templateUrl": "../views/artwork/artwork.html",
      "controller": "ArtworkController"
    })
    .state('artwork.detail', {
      "url": "/:id",
      "templateUrl": "../views/artwork/artworkDetail.html",
      "controller": "ArtworkDetailController"
    })
    .state('location', {
      "url": "/location",
      "templateUrl": "../views/location/location.html",
      "controller": "LocationController"
    })
    .state('location.event', {
      "url": "/event",
      "templateUrl": "../views/location/event/event.html",
      "controller": "EventController"
    })
    .state('location.event.detail', {
      "url": "/:id",
      "templateUrl": "../views/location/event/eventDetail.html",
      "controller": "EventDetailController"
    })


  .state('location.host', {
      "url": "/host",
      "templateUrl": "../views/location/host/host.html",
      "controller": "HostController"
    })
    .state('location.host.explore', {
      "url": "/explore",
      "templateUrl": "../views/location/host/hostExplore.html",
      "controller": "HostExploreController"
    })
    .state('location.host.detail', {
      "url": "/:id",
      "templateUrl": "../views/location/host/hostDetail.html",
      "controller": "HostDetailController"
    })
    .state('asgard', {
      "url": "/asgard",
      "templateUrl": "views/asgard.html",
      "controller": "AsgardController"
    })
    .state('asgard.topic', {
      "url": "/topic",
      "templateUrl": "views/topic/topic.html",
      "controller": "TopicController"
    })
    .state('asgard.topic.detail', {
      "url": "/:id",
      "templateUrl": "views/topic/topicDetail.html",
      "controller": "TopicDetailController"
    })
    .state('asgard.topic.follower', {
      "url": "/:id/follower",
      "templateUrl": "views/topic/topicFollowers.html",
      "controller": "TopicFollowerController"
    });
}]);
asgard.run(['$rootScope', '$state', '$stateParams', 'i18n', function($rootScope, $state, $stateParams, i18n) {
  //i18n.setUpI18nByArray();
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);