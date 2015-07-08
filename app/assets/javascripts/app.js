tagic = angular.module('tagic',[
  'templates',
  'ngRoute',
  'controllers',
])

tagic.config([ '$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
          templateUrl: "index.html",
          controller: 'RecipesController'
        }
      )

      .otherwise({redirectTo: '/'});
}])

recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  },
  {
    id: 2,
    name: 'Garlic Mashed Potatoes',
  },
  {
    id: 3,
    name: 'Potatoes Au Gratin',
  },
  {
    id: 4,
    name: 'Baked Brussel Sprouts',
  },
];

function filterByName(recipe) {
  return recipe.name.toLowerCase().indexOf(keywords) != -1;
}

controllers = angular.module('controllers',[])
controllers.controller("RecipesController", [ '$scope', '$routeParams', '$location',
  function($scope,$routeParams,$location){
    $scope.search = function(keywords){$location.path("/").search('keywords',keywords);}

    if ($routeParams.keywords) {
      keywords = $routeParams.keywords.toLowerCase();
      $scope.recipes = recipes.filter(filterByName);
      }
    else
      $scope.recipes = [];
}])