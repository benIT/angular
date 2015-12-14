var tyres = $('tyre') ; 
for (var i = 0; i < tyres.length; i++) {
	console.log(tyres[i].innerText) ;
};

on('event[action="edit"]','click', function () {
	console.log(new Date()) ;
});

off('event[action="edit"]','click',function(){
	console.log('inactive');
}) ;

on('event[action="add"]','click', function () {
	$('.form')[0].className += " visible" ;
});

on('event[action="save"]','click', function () {
	$('.form')[0].className = "form" ;
	var tyre = document.createElement('tyre');
	tyre.innerText += '<reference>'+$('.form input[name="reference"]')[0].value+'</reference>' ;
	tyre.innerText += '<vehiculeType>'+$('.form input[name="vehiculeType"]')[0].value+'</vehiculeType>' ;
	tyre.innerText += '<heigth>'+$('.form input[name="heigth"]')[0].value+'</heigth>' ;
	tyre.innerText += '<width>'+$('.form input[name="width"]')[0].value+'</width>' ;
	tyre.innerText += '<thickness>'+$('.form input[name="thickness"]')[0].value+'</thickness>' ;
	tyre.innerText += '<other>'+$('.form input[name="other"]')[0].value+'</other>' ;
	tyre += '</tyre>' ;
	$('list')[0].appendChild(tyre) ;
});
