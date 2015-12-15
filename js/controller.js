'use strict';

modis.controller('TyresController', ['$scope','TyresService', function ($scope, TyresService) {
	$scope.tyre = {pattern:{}};
	$scope.readable = false;

	TyresService.query(function(response){
		$scope.tyres = response[0];
	});

	$scope.addTyre = function(){
		if($scope.tyre.reference){
			$scope.tyres[$scope.tyre.reference] = angular.copy($scope.tyre);
		}
		$('.form')[0].className = 'form';
		$scope.tyre = {pattern:{}};
	};

	$scope.removeTyre = function(key){
		delete $scope.tyres[key];
	};


	$scope.showAddTyre =  function(){
		$scope.readable = false;
		$('.form')[0].className += ' visible';
	};	

	$scope.showEditTyre = function(key){
		$scope.readable = true;
		$('.form')[0].className += ' visible';
		$scope.tyre = angular.copy($scope.tyres[key]);
	};	
}]);

/*modis.controller('delete',function(){

	off('event[action="delete"]', initEve, function(){
			//modis.service.delete();
	});
});

modis.controller('edit', function () {

	on('event[action="edit"]', initEve, function(){
		////modis.service.post();
	});		
});

modis.controller('save', function () {

	on('event[action="save"]', initEve, function(){
		$('#form')[0].style.display = 'none';
		
		var newTyre = tyreForm('.form',elements);
		modis.view.addTyre('list', newTyre);
	
		modis.inject('service', 'post')(newTyre);
	});	
});*/