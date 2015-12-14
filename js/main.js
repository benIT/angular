var tyres = $('tyre') ; 
var tyresArray = [] ; 
var initEvents = ['click'] ;
for (var i = 0; i < tyres.length; i++) {
	console.log(tyres[i].innerText) ;
};

on('event[action="add"]',initEvents, function () {
	console.log(new Date()) ;
});

off('event[action="remove"]',initEvents,function(){
	console.log('inactive');
}) ;

edit('event[action="edit"]',initEvents, function () {
	document.getElementById('form').style.display = 'block';
});



save('event[action="save"]',initEvents, function () {
	var tyre = tyreFromForm('.form');
	tyre.addTyreToList($('list')[0],tyre) ;

	$('#form')[0].style.display = 'none';
	

	
	tyresArray.push(tyre);
	console.log(tyresArray) ;

});