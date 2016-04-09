/* App Module */
var url = 'https://api.unsplash.com/photos/search?page=1&query=';
angular.module('photoGallery', [
    'ui.router',
    'photoGallery.controllers',
    'photoGallery.service',
    'ngRoute',

  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
      url: '/home',
      templateUrl: 'HomePage/homepage.html',
      controller: 'homePageController'
    })
    .state('Gallery', {
      url: '/gallery',
      templateUrl: 'PhotoGrid/photogrid.html',
      controller: 'photogridcontroller'
    });

  });
