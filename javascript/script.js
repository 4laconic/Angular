var app = angular.module('CurriencyConverter', ['ngRoute'])

app.controller('MainController',
  function($scope, $route, myService1, myService6, myService2, myService3, myService4, myService5) {
  $scope.$route = $route;
  $scope.myService1 = myService1;
  $scope.myService2 = myService2;
  $scope.myService3 = myService3;
  $scope.myService5 = myService5;
  $scope.myService6 = myService6;
  $scope.testFunction = function() { 
    $scope.myService2.name = $scope.myService2.name + 1;
    $scope.myService3();
  };
});
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/currency', {
        templateUrl: 'view.html',
        controller: 'CurrencyController'
      });
    $locationProvider.html5Mode(true);
}]);