var tyres = $('tyre') ; 
for (var i = 0; i < tyres.length; i++) {
	console.log(tyres[i].innerText) ;
};

on('event[action="add"]','click', function () {
	console.log(new Date()) ;
});

off('event[action="add"]','click',function(){
	console.log('inactive');
}) ;