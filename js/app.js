var app = angular.module('championsApp', ['ngRoute', 'ngSanitize']);

app
  .config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'views/championList.html'
      })
      .when('/:championId',{
        controller:'ChampionController',
        templateUrl:'views/champion.html'
      })
      .otherwise({ redirectTo: '/' });

  })

  .constant('apiKey', 'RGAPI-3b85e6e8-fa81-491a-acc0-6db5025b7e1d')

  .filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }]);
