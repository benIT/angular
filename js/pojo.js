function Tyre (reference,vehiculeType,pattern,other) {
	this.reference = reference ;
	this.vehiculeType = vehiculeType;
	this.pattern = pattern ;
	this.other = other ;
}


function Pattern (height,width,thickness) {
	this.height=height;
	this.width=width;
	this.thickness=thickness;
}

//prototype is initialized only when object is created, so we made manually the first initial initilization
Tyre.prototype = Tyre.prototype || {} ;  //keep Tyre.prototype if exists is no empty object. So wa are sure
Tyre.prototype = { 
		tyreFromForm: function (form, elements) {
			var tyre = new Tyre();
			var pattern = new Pattern();
			tyre.reference=  $(form+ ' #reference')[0].value ;
			tyre.vehiculeType=  $(form+ ' #vehiculeType')[0].value ;
			tyre.other=  $(form+ ' #other')[0].value ;
			pattern.heigth=  $(form+ ' #heigth')[0].value ;
			pattern.thickness=  $(form+ ' #thickness')[0].value ;
			pattern.width=  $(form+ ' #width')[0].value ;
			tyre.pattern = pattern ;

			elements.forEach(function () {
				var table = this.split('_');
				var selector = null ; 
				if (table.length = 1) {
					selector = tyre[this];
				}else {
					selector = tyre[this][0];
				}
				tyre.[this]=  $(form+ ' #'+this)[0].value ;
			}) 
			return tyre ; 
	},
	addTyreToList = function (rootElement, tyre) {
		var iDiv = document.createElement('tyre');
		//$('list')[0].appendChild(iDiv);
		rootElement.appendChild(iDiv);

		var innerDiv = document.createElement('reference');
		innerDiv.innerText = tyre.reference;

		var innerDiv2 = document.createElement('vehiculeType');
		innerDiv2.innerText = $('.form #vehiculeType')[0].value;

		var innerDiv3 = document.createElement('heigth');
		innerDiv3.innerText = $('.form #heigth')[0].value;

		var innerDiv4 = document.createElement('width');
		innerDiv4.innerText = $('.form #width')[0].value;

		var innerDiv5 = document.createElement('thickness');
		innerDiv5.innerText = $('.form #heigth')[0].value;

		var innerDiv6 = document.createElement("event");
		innerDiv6.setAttribute("action", "add");
		innerDiv6.innerText = '+';

		var innerDiv7 = document.createElement("event");
		innerDiv7.setAttribute("action", "remove");
		innerDiv7.innerText = '-';
		iDiv.appendChild(innerDiv);
		iDiv.appendChild(innerDiv2);
		iDiv.appendChild(innerDiv3);
		iDiv.appendChild(innerDiv4);
		iDiv.appendChild(innerDiv5);
		iDiv.appendChild(innerDiv6);
		iDiv.appendChild(innerDiv7);
	}
}