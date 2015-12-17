'use strict';

tyres.controller('ListTyresController', ['$translate', '$translatePartialLoader', '$scope', '$state', 'TyresService', function ($translate,$translatePartialLoader, $scope, $state, TyresService) {
	$scope.tyre = {pattern:{}};
	$scope.readable = false;
	$scope.displayForm = false;

	$translatePartialLoader.addPart("components/tyres/i18n");
	$translate.refresh();

	$scope.changeLang = function() {
 		$translate.use($scope.lang);
	}

	$scope.getTyres = function(){
		$scope.tyres = JSON.parse(sessionStorage.getItem("tyres"));
		if(!$scope.tyres){
			TyresService.query(function(response){
				$scope.tyres = response[0];
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
		$state.go('tyres');
	};
}]);


tyres.controller('ManageTyresController', ['$scope',
										   '$controller',
										   '$stateParams', 
										   '$state',
										   'TyresService', function ($scope, 
										   							 $controller,
										   							 $stateParams,
										   							 $state, 
										   							 TyresService) {
	// controller inheritance
	//$controller("ListTyresController", {$scope : $scope});

	if($stateParams['action'] == "delete"){
		delete $scope.tyres[$stateParams['key']];
		sessionStorage.setItem('tyres', JSON.stringify($scope.tyres));
		$state.go('tyres');
	} else if($stateParams['action'] == "edit"){
		$scope.readable = true;
		$scope.tyre = angular.copy($scope.tyres[$stateParams['key']]);
	}
	
}]);
