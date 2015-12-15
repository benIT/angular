// Imports modules dependencies
var imports = ['ngRoute', 'ngResource'];
var modis = angular.module('modis', imports);

// app configuration
modis.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/', {
        templateUrl: 'partials/tyres.tpl',
        controller: 'TyresController'
  	});

}]);

