'use strict';

modis.controller('add', function () {

	on('event[action="add"]', initEve, function(){
			document.getElementById('form').style.display = 'block';
	});	
});

modis.controller('delete',function(){

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
});