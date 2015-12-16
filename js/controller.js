'use strict';

modis.controller('ListTyresController', ['$scope','TyresService', function ($scope, TyresService) {
	$scope.tyre = {pattern:{}};
	$scope.readable = false;
	$scope.displayForm = false;

	$scope.getTyres = function(){
		$scope.tyres = JSON.parse(sessionStorage.getItem("tyres"));
		if(!$scope.tyres){
			TyresService.query(function(response){
				$scope.tyres = response;
				sessionStorage.setItem('tyres', JSON.stringify($scope.tyres));
			});
		}
	}

	$scope.getTyres();

	$scope.addTyre = function(){
		if($scope.tyre.reference){
			$scope.tyres[$scope.tyre.reference] = angular.copy($scope.tyre);
			sessionStorage.setItem('tyres', JSON.stringify($scope.tyres));
		}
		$scope.displayForm = false;
		$scope.tyre = {pattern:{}};
	};

	$scope.showAddTyre =  function(){
		$scope.readable = false;
		$scope.displayForm = true;
	};	
}]);


modis.controller('ManageTyresController', ['$scope',
										   '$controller',
										   '$routeParams', 
										   'TyresService', function ($scope, 
										   							 $controller,
										   							 $routeParams, 
										   							 TyresService) {
	// controller inheritance
	$controller("ListTyresController", {$scope : $scope});

	if($routeParams['action'] == "delete"){
		delete $scope.tyres[$routeParams['key']];
		sessionStorage.setItem('tyres', JSON.stringify($scope.tyres));
	} else if($routeParams['action'] == "edit"){
		$scope.readable = true;
		$scope.displayForm = true;
		$scope.tyre = angular.copy($scope.tyres[$routeParams['key']]);
	}
	
}]);
