var tyres = $('tyre') ; 
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
	
	//document.getElementById('form').style.display = 'none';
	$('#form')[0].style.display = 'none';
	var iDiv = document.createElement('tyre');
	$('list')[0].appendChild(iDiv);

	var innerDiv = document.createElement('reference');
	innerDiv.innerText = $('#reference')[0].value;

	var innerDiv2 = document.createElement('vehiculeType');
	innerDiv2.innerText = $('#vehiculeType')[0].value;

	var innerDiv3 = document.createElement('heigth');
	innerDiv3.innerText = $('#heigth')[0].value;

	var innerDiv4 = document.createElement('width');
	innerDiv4.innerText = $('#width')[0].value;

	var innerDiv5 = document.createElement('thickness');
	innerDiv5.innerText = $('#heigth')[0].value;

	var innerDiv6 = document.createElement("event");
	innerDiv6.setAttribute("action", "add");
	innerDiv6.innerText = '+';

	var innerDiv7 = document.createElement("event");
	innerDiv7.setAttribute("action", "remove");
	innerDiv7.innerText = '-';
		//innerDiv6.innerText = $('#heigth')[0].value;

	iDiv.appendChild(innerDiv);
	iDiv.appendChild(innerDiv2);
	iDiv.appendChild(innerDiv3);
	iDiv.appendChild(innerDiv4);
	iDiv.appendChild(innerDiv5);
	iDiv.appendChild(innerDiv6);
	iDiv.appendChild(innerDiv7);



});