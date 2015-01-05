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
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    'infinite-scroll',
    'pascalprecht.translate'
  ])
asgard.config(function($stateProvider, $urlRouterProvider,$resourceProvider,$translateProvider){
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
        //home state and home page
        .state('home', {
            url: "/home",
            templateUrl: "views/layout/cover.html",
            controller:"LayoutController"
        })
        .state('about', {
            url: "/about",
            templateUrl: "../views/common/about.html",
            controller:"AboutController"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "../views/common/contact.html",
            controller:"ContactController"
        })
        .state('artwork', {
            url: "/artwork",
            templateUrl: "../views/artwork/artwork.html",
            controller:"ArtworkController"
        })
        .state('artwork.detail', {
            url: "/artworkDetail",
            templateUrl: "../views/artwork/artworkDetail.html",
            controller:"ArtworkDetailController"
        })
        .state('asgard', {
            url: "/asgard",
            templateUrl: "views/asgard.html",
            controller:"AsgardController"
        })
        .state('asgard.setting', {
            url: "/setting/:status",
            templateUrl: "views/setting/setting.html",
            controller:"SettingController"
        })
        .state('asgard.subject', {
            url: "/subject",
            templateUrl: "views/subject/subject.html",
            controller:"SubjectController"
        })
        .state('asgard.account', {
            url: "/account",
            templateUrl: "views/account/account.html",
            controller:"AccountController"
        })
//        .state('asgard.artwork', {
//            url: "/artwork",
//            templateUrl: "../views/asgard/artwork.html",
//            controller:"ArtworkController"
//        })

});
