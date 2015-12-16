'use strict';

modis = modis || {};
modis.view = modis.view || {};

modis.view.addTyre = function (rootElement, tyre) {
	
		var html = "<tyre>";
		html += "<reference>"+tyre.reference+"</reference>";
		html += "<vehiculeType>"+tyre.vehiculeType+"</vehiculeType>";
		html += "<pattern>";
		html += "<height>"+tyre.pattern.height+"</height>";
		html += "<width>"+tyre.pattern.width+"</width>";
		html += "<thickness>"+tyre.pattern.thickness+"</thickness>";
		html += "</pattern>";
		html += "<other>"+tyre.other+"</other>";
		html += "<event action='edit'>edit</event>";
		html += "<event action='remove'>-</event>";
		html += "</tyre>";
		
		$(rootElement)[0].innerHTML += html;

	};