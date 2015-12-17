// Imports modules dependencies
var imports = ['ngRoute', 'ngResource', 'filters', 'ui.router'];
var modis = angular.module('modis', imports);

// app configuration
modis.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home',{
		url:'/',
        views : {
        	'tyres' : {
        		templateUrl: 'partials/list.tpl',
        		controller: 'ListTyresController' 
        	}
        },             
  	})

  	$stateProvider.state('tyres',{
  		url: '/:action',
        views : {        	
        	'tyres': {
        		templateUrl: 'partials/tyres.tpl',        		
        		controller: 'ListTyresController'
        	},
	    	'list@tyres': {
	    		templateUrl: 'partials/list.tpl',
	    		controller: 'ListTyresController' 
	    	 },
        },         
  	})
  	.state('tyres.subview', {
  		url:'/:key',
	    views: {
	    	'form': {
	    		templateUrl: 'partials/addTyre.tpl',
	    		controller: 'ManageTyresController'  
	    	}
	    },	      
	})
  	.state('tyres.subviewadd', {
	    views: {
	    	'form': {
	    		templateUrl: 'partials/addTyre.tpl',
	    		controller: 'ManageTyresController'  
	    	}
	    },	      
	})

  	$urlRouterProvider.otherwise('/');
});

