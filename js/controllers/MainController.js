API_KEY = 'f1fe37d2-6955-48ce-bc41-7cbc084efd83';

app.controller('MainController', ['$scope', 'champions', 'freechampions', '$http',  function($scope, champions, freechampions, $http) { 
 champions.success(function(data) { 
     //$scope.champions = data;
     $scope.champions = Object.keys(data.data).map(function (key) { return data.data[key]; });
     console.log($scope.champions);
  });
    
    
    freeChamps = [];
    freechampions.success(function(data, status, headers, config) {
		$scope.freechampions = data;
        console.log('Nombre de champions free:'+$scope.freechampions.champions.length);
        for (i=0; i < $scope.freechampions.champions.length; i++){
            $http({method: 'GET', url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/' + $scope.freechampions.champions[i].id+'?champData=image' + '&api_key=' + API_KEY }).
			success(function(data2, status2, headers2, config2) {
				// success
				freeChamps.push(data2);
                $scope.freeChamps = freeChamps;
                console.log($scope.freeChamps);
			});
        }
    });
    
    
    
}]);