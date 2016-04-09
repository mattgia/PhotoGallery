angular.module('photoGallery.service', [])
  .service('sharedProperties', function() {
    var Search = '';
    return {
      getProperty: function() {
        console.log(Search);

        return Search;
      },
      setProperty: function(value) {
        Search = value;
      }
    };
  })
  .service('PictureService', function($http,$q) {

this.getImages = function(value) {
   var def = $q.defer();
        $http.get('../storedData/data.json').then(function successCallback(response) {
          def.resolve(response.data);
          console.log(response.data);
        }, function errorCallback(response) {
          return response;

        });
        return def.promise;

        // console.log(url+value+"&client_id=11f2c13fb6d56914af5413ac5760d739294b5b3a5a9c09152b4d9466d0f9d62d");
      }
  });
