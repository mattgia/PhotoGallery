/* App Module */

angular.module('photoGallery', [
    'photoGallery.controllers',
  'ngRoute',
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'HomePage/homepage.html',
        controller: 'homePageController'
      })
    //   when('/phones/:phoneId', {
    //     templateUrl: 'partials/phone-detail.html',
    //     controller: 'PhoneDetailCtrl'
    //   })
    //   .
      .otherwise({
        redirectTo: '/'
      });
  }]);
