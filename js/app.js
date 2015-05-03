var app = angular.module('championsApp', ['ngRoute']);


app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/championList.html' 
    })
    .when('/details/:id',{
      controller:'SplashArtController',
      templateUrl:'views/splash.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
})