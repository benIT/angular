'use strict';

var dico = {};

modis.resource('save', function(key, obj){
	dico[key] = obj;
});

modis.resource('find', function(key){
	return dico[key];
});

modis.resource('delete', function(key){
	delete dico[key];
});