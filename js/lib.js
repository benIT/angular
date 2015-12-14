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

/**
*Add a listener for the matching selector
*/
function edit(elementSelector, events, behavior) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(events.join(' '),behavior);
	}
}

/**
*Add a listener for the matching selector
*/
function save(elementSelector, events, behavior) {
	var elements = $(elementSelector) ;
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(events.join(' '),behavior);
	}
}