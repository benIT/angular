var tyres = [] ; 
var elements = ['reference', 'vehiculeType', 'pattern_height','pattern_width','pattern_thickness','other'];
var initEve = ['click'];

on('event[action="add"]',initEve , function () {
	document.getElementById('form').style.display = 'block';
});

off('event[action="remove"]',initEve,function(){
	console.log('inactive');
}) ;

edit('event[action="edit"]',initEve, function () {
	console.log('inactive');
});

save('event[action="save"]',initEve, function () {
	
	$('#form')[0].style.display = 'none';
		
	var newTyre = Tyre.prototype.tyreForm('.form',elements);
	newTyre.addTyre('list');
	
	tyres.push(newTyre);
});

