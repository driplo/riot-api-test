app.controller('SplashArtController', ['$scope', 'champions', '$routeParams', function($scope, champions, $routeParams) {
    
champions.success(function(data) { 
    $scope.details = data.data[$routeParams.id];
  });
    
}]);