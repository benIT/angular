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