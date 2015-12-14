

function $(selector) {
	return document.querySelectorAll(selector);
}

/**
*Add a listener for the matching selector
*/
function on(elementSelector, events, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(events.join(' '),behaviour);
	}
}
/**
Remove listener for the matching selector
*/
function off(elementSelector, events, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].removeEventListener(events.join(' '), behaviour);
	}
}

/**
*Add a listener for the matching selector
*/
function edit(elementSelector, events, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(events.join(' '),behaviour);
	}
}

/**
*Add a listener for the matching selector
*/
function save(elementSelector, events, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(events.join(' '),behaviour);
	}
}