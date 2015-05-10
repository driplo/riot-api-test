app.controller('ChampionController', ['$scope', '$routeParams', 'apiKey', '$http', '$sanitize',
  function($scope, $routeParams, apiKey, $http) 
  {
    $scope.championId = $routeParams.championId;
      $http({
        method: 'GET',
        url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/' + $scope.championId + '?champData=all' + '&api_key=' + apiKey
      }).success(function(data) {
        $scope.champion = data;
        console.log($scope.champion);
      });
  }
]);

angular.module('championsApp')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
}]);