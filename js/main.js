// Imports modules dependencies
var imports = ['ngRoute', 'ngResource','filters'];
var modis = angular.module('modis', imports);

// app configuration
modis.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/', {
        templateUrl: 'partials/tyres.tpl',
        controller: 'ListTyresController'
  	}).when('/:action/:key', {
        templateUrl: 'partials/tyres.tpl',
        controller: 'ManageTyresController'
  	}).otherwise('/');
}]);

