API_KEY = 'f1fe37d2-6955-48ce-bc41-7cbc084efd83';

app.factory('champions', ['$http', function($http) { 
  return $http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?&champData=image&api_key='+API_KEY) 
            .success(function(data) { 
              return data;
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

app.factory('freechampions', ['$http', function($http) { 
  return $http.get('https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key='+API_KEY) 
            .success(function(data) { 
              return data;
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
