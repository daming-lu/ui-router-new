angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    /*
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        //controller: 'homeCtrl'
          controller: function($scope) {
              
              $scope.title = "home title";
              $scope.items = ['item1', 'item2', 'item3'];
          }
      })
    */
      .state('about', {
        url: '#/about',
        templateUrl: 'about.html',
        //controller: 'aboutCtrl'
          controller: function($scope){
              console.log("about route");
          }
      })
  }])

console.log("app.js");
