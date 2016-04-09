angular.module('photoGallery.controllers')
  .controller('homePageController',
  function($scope,$state,sharedProperties) {



    $scope.onsearch = function(Searched){
      console.log(Searched);
      sharedProperties.setProperty(Searched);
      $state.go('Gallery');
    };




}
  )
;
