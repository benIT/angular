'use strict';

// Imports modules dependencies
var imports = ['ngResource', 'filters', 'ui.router'];

var tyres = angular.module('tyres', imports);

// app configuration
tyres.config(function ($stateProvider, $urlRouterProvider) {

  	$stateProvider.state('tyres.subview', {
  		url:'/:action/:key',
	    views: {
	    	'form': {
	    		templateUrl: '/components/tyres/views/addTyre.tpl',
	    		controller: 'ManageTyresController'  
	    	}
	    },	      
	})
  	.state('tyres.subviewadd', {
	    views: {
	    	'form': {
	    		templateUrl: '/components/tyres/views/addTyre.tpl',
	    		controller: 'ManageTyresController'  
	    	}
	    },	      
	}).state('tyres',{
  		url: '/tyres',
        views : {        	
        	'tyres': {
        		templateUrl: '/components/tyres/views/tyres.tpl',        		
        		controller: 'ListTyresController'
        	},
	    	'list@tyres': {
	    		templateUrl: '/components/tyres/views/list.tpl',
	    		controller: 'ListTyresController' 
	    	 },
        },         
  	})
});
