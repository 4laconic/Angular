var app = angular.module('myApp', ['ngRoute'])
.filter('customFilter', function() {
  return function(input, pad, length) {
      input = input || '';
      pad = pad || '*';
      length = length || 5;
      var temp = input ? pad.repeat(length) : '';
      console.log(temp.length);
      return temp + input + temp;
    }
});
app.controller('MainController', function($scope, $route) {

});
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/currency', {
        templateUrl: 'view.html',
        controller: 'MainController'
      });
    $locationProvider.html5Mode(true);
}]);