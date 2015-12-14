function Pattern(height, width, thickness) {
  	this.height = height;
  	this.width = width;
  	this.thickness = thickness;
  }

function Tyre (reference, vehiculeType, height, width, thickness, other) { 
  this.reference = reference;
  this.vehiculeType = vehiculeType;
  this.pattern = new Pattern();
  this.other = other;  
}

Tyre.prototype = Tyre.prototype || {};

Tyre.prototype.tyreForm = function (rootForm, elements) {

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

Tyre.prototype.addTyre = function (rootElement) {
	
		var html = "<tyre>";
		html += "<reference>"+this.reference+"</reference>";
		html += "<vehiculeType>"+this.vehiculeType+"</vehiculeType>";
		html += "<pattern>";
		html += "<height>"+this.pattern.height+"</height>";
		html += "<width>"+this.pattern.width+"</width>";
		html += "<thickness>"+this.pattern.thickness+"</thickness>";
		html += "</pattern>";
		html += "<other>"+this.other+"</other>";
		html += "<event action='edit'>edit</event>";
		html += "<event action='remove'>-</event>";
		html += "</tyre>";
		
		$(rootElement)[0].innerHTML += html;

	};