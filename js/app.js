var app = angular.module('championsApp', ['ngRoute', 'ngSanitize'] );

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/championList.html' 
    })
    .when('/:championId',{
      controller:'ChampionController',
      templateUrl:'views/champion.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}).constant('apiKey', 'f1fe37d2-6955-48ce-bc41-7cbc084efd83');
