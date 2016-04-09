angular.module('photoGallery.controllers', [])
  .controller('homePageController',
  function($scope) {



    $scope.onsearch = function(Searched){
      console.log(Searched);
    };




}
  )
;
