app.controller('MainController', ['$scope', 'champions', 'freechampions', '$http', 'apiKey', '$sanitize', function($scope, champions, freechampions, $http, apiKey, $sanitize) {

  champions.success(function (data) {
    $scope.champions = data;
    $scope.championsArray = Object.keys(data.data).map(function (key) { return data.data[key]; });
  });

  var freeChamps = [];

  freechampions.success(function (data) {

    $scope.freechampions = data;

    for (var i = 0; i < $scope.freechampions.champions.length; i++) {
      $http({
        method: 'GET',
        url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/' + $scope.freechampions.champions[i].id + '?champData=image' + '&api_key=' + apiKey
      }).success(function(data2) {
        freeChamps.push(data2);
        $scope.freeChamps = freeChamps;
      });
    }
  });

}]);
