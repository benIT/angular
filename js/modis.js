'use strict';

var modis = modis || {};
modis.register = modis.register || {};

modis.factory = function (level, name, impl) {

	modis.register[level] = modis.register[level] || {};
	modis.register[level][name] = impl;
};

modis.inject = function (level, name) {
	return modis.register[level][name];
};

modis.controller = function(name, impl){
	modis.factory('controller', name, impl);
}

modis.service = function(name, impl){
	modis.factory('service', name, impl);
}

modis.resource = function(name, impl){
	modis.factory('resource', name, impl);
}