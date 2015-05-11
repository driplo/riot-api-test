app.controller('ChampionController', ['$scope', '$routeParams', 'apiKey', '$http', '$sanitize',
  function ($scope, $routeParams, apiKey, $http) {

    $scope.championId = $routeParams.championId;
      $http({
        method: 'GET',
        url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/' + $scope.championId + '?champData=all' + '&api_key=' + apiKey
      }).success(function(data) {
        $scope.champion = data;
      });

    // we create a function that will return our result
    $scope.populateTooltip = function (ability) {

      // we get the tooltip unmodified data
      var text = ability.tooltip;

      // for each effect burn item of the ability we will try to find occurencies in the tooltip,
      // here effectBurn is an array so we can iterate over it and get one by one element
      ability.effectBurn.forEach(function (effect, i) {
        // here we create a regex basically searching in all the text for the '{{ eX }}' pattern where X is the effect burn number
        text = text.replace(new RegExp('{{ e' + i + ' }}', 'g'), '<strong>'+effect+'</strong>');
        // if it's found, it will be replaced by the value of the effect
      });

      // there are some abilities that doesn't have variables
      if (ability.vars) {
        // for each variable in the array
        ability.vars.forEach(function (variable) {
          // here, the variable is not a string like the effectBurn, but an object
          // which can be represented like: { key: "a2", link: "bonusattackdamage", coeff: [0.6] }

          // then we find the sub strings that matches the pattern '{{ keyName }}' and replacing it by the true
          // coefficient we multiply it with 100
          // the link is not really human readable, but I've not fond a way to remap it correctly
          // you can have a look at that endpoint https://global.api.pvp.net/api/lol/static-data/eune/v1.2/language-strings
          // but it's not giving the correct information
          text = text.replace(new RegExp('{{ ' + variable.key + ' }}', 'g'), '<span style="color:#FF6F00">'+variable.coeff[0] * 100 + '% ' + variable.link+'</span>');

        });
      }

      // here we trim the remaining variables that were not used (for example the f3 of Zed)
      // think it's a bug
      text = text.replace(new RegExp('{{ [a-z0-9]+ }}', 'g'), '');

      // we return the modified string
      // more infos about this in the Champion data at https://developer.riotgames.com/docs/static-data
      return text;
    };
  }
]);
