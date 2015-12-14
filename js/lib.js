function $(selector) {
	return document.querySelectorAll(selector);
}

/**
*Add a listener for the matching selector
*/
function on(elementSelector, event, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(event,behaviour);
	}
}
/**
Remove listener for the matching selector
*/
function off(elementSelector, event, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].removeEventListener(event, behaviour);
	}
}

/**
*Add a listener for the matching selector
*/
function edit(elementSelector, event, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(event,behaviour);
	}
}

/**
*Add a listener for the matching selector
*/
function save(elementSelector, event, behaviour) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(event,behaviour);
	}
}