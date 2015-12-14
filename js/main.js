var tyres = $('tyre') ; 
for (var i = 0; i < tyres.length; i++) {
	console.log(tyres[i].innerText) ;
};

var initEve = ['click'];

on('event[action="add"]',initEve , function () {
	console.log(new Date()) ;
});

off('event[action="remove"]',initEve,function(){
	console.log('inactive');
}) ;

edit('event[action="edit"]',initEve, function () {
	document.getElementById('form').style.display = 'block';
});

save('event[action="save"]',initEve, function () {
	
	$('#form')[0].style.display = 'none';
	// to do: convert form to Type object
	// and then append into iDiv
		
var elements = ['reference', 'vehiculeType', 'pattern_heigth','pattern_width','pattern_thickness'];
var pneu = Tyre.prototype.tyreForm('.form',elements);
pneu.addTyre('.form', pneu);
});

