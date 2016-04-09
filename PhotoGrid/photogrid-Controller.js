angular.module('photoGallery.controllers')
  .controller('photogridcontroller',
    function($scope,sharedProperties,PictureService,$http) {
      $scope.HeEntered="sadsadsa"
      $scope.onsearch = function(Searched) {
        sharedProperties.setProperty(Searched);
        $scope.getImages(Searched);

      };

      // $scope.HeEntered = sharedProperties.getProperty();
      $scope.getImages = function (imageToSearch) {
        $http.get('../storedData/data.json').then(function successCallback(response) {
          $scope.images = response.data;
        }, function errorCallback(response) {
          return response;

        });

      }
      $scope.getImages();
    }
  );
