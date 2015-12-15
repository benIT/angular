'use strict';

modis.service('TyresService', ['$resource', function($resource){
	return $resource("/mocks/mock.json");
}]);
