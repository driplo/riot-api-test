app.controller('MainController', ['$scope', 'champions', 'freechampions', '$http', 'apiKey', function($scope, champions, freechampions, $http, apiKey) {

  champions.success(function (data) {
    $scope.champions = Object.keys(data.data).map(function (key) { return data.data[key]; });
  });

  var freeChamps = [];

  freechampions.success(function (data) {

    $scope.freechampions = data;
    console.log('Nombre de champions free:' + $scope.freechampions.champions.length);

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
