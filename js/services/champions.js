app.factory('champions', ['$http', 'apiKey', function ($http, apiKey) {
  return $http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?&champData=image&api_key=' + apiKey, { cache: true })
            .success(function (data) { return data; })
            .error(function (err) { return err; });
}]);

app.factory('freechampions', ['$http', 'apiKey', function ($http, apiKey) {
  return $http.get('https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=' + apiKey, { cache: true })
            .success(function (data) { return data; })
            .error(function (err) { return err; });
}]);
