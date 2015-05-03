app.factory('champions', ['$http', function($http) { 
  return $http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=f1fe37d2-6955-48ce-bc41-7cbc084efd83') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);