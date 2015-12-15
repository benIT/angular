function $(selector) {
	return document.querySelectorAll(selector);
}

/**
*Add a listener for the matching selector
*/
function on(elementSelector, events, behavior) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(events.join(' '),behavior);
	}
}
/**
Remove listener for the matching selector
*/
function off(elementSelector, events, behavior) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].removeEventListener(events.join(' '), behavior);
	}
}

var tyreForm = function (rootForm, elements) {

	var pneu = new Tyre();

	elements.forEach(function (element, index){

		var table = element.split('_');

		var selector = null;
		console.log(element);
		if(table.length == 1) {

			pneu[table[0]] =$(rootForm + ' #' + element)[0].value;
		} else {

			pneu[table[0]][table[1]] =$(rootForm + ' #' + element)[0].value;
		}
		$(rootForm + ' #' + element)[0].value = "";
	});	
	
	return pneu;
};