// Imports modules dependencies
var imports = ['ngRoute', 'ngResource', 'ui.router', 'tyres'];
var modis = angular.module('modis', imports);

// app configuration
modis.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home',{
		url:'/',
        views : {
        	'tyres' : {
        		template: function(){
        			console.log('Affichage de la page index');
        			return 'message d\'acceuil';
        		},
        		controller: 'Home' 
        	}
        },             
  	})	

  	$urlRouterProvider.otherwise('/');
});

