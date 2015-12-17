'use strict';

// Imports modules dependencies
var imports = ['ngRoute', 'ngResource', 'ui.router', 'tyres', 'pascalprecht.translate'];
var modis = angular.module('modis', imports);

// app configuration
modis.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.preferredLanguage('en');

    $translatePartialLoaderProvider.addPart('i18n');
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/{part}/{lang}.json'
    }); 


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

