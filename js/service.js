'use strict';

modis.service('get', function(key){
	return modis.inject('resource', 'find')(key);
});

modis.service('post', function(key, obj){
	modis.inject('resource', 'save')(key, obj);
});

modis.service('delete', function(key){
	modis.inject('resource', 'delete')(key);
});