function Pattern(heigth, width,thickness) {
  	this.heigth = heigth;
  	this.width = width;
  	this.thickness = thickness;
  }

function Tyre (reference, vehiculeType, pattern,other ) { 
  this.reference = reference;
  this.vehiculeType = vehiculeType;
  this.pattern = pattern;
  this.other = other;  
}

Tyre.prototype = Tyre.prototype || {};
Tyre.prototype = 
{
 tyreForm : function (rootForm, elements) {
					// des trucs et des lignes a ecrire

					var pneu = new Tyre();
					
					pneu.pattern = new Pattern ();

					elements.forEach(function (element, index){

					var table = element.split('_');

					var selector = null;
					console.log(element);
					if(table.length == 1) {

						pneu[table[0]] =$(rootForm + ' #' + element)[0].value;
					} else {

						pneu[table[0]][table[1]] =$(rootForm + ' #' + element)[0].value;
					}
					});
					
					return pneu;
			},

//Tyre.prototype = Tyre.prototype || {};
addTyre : function (rootElement, pneu) {

					var iDiv = document.createElement('tyre');
					$(rootElement)[0].appendChild(iDiv);

						var innerDiv = document.createElement('reference');
					innerDiv.innerText = pneu.reference;

					var innerDiv2 = document.createElement('vehiculeType');
					innerDiv2.innerText = pneu.vehiculeType;

					var innerDiv3 = document.createElement('heigth');
					innerDiv3.innerText = pneu.pattern.heigth;

					var innerDiv4 = document.createElement('width');
					innerDiv4.innerText = pneu.pattern.width;

					var innerDiv5 = document.createElement('thickness');
					innerDiv5.innerText = pneu.pattern.thickness;

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


			}
}