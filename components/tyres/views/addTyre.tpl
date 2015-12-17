<tyre class="form">
	<input ng-model="tyre.reference" ng-readonly="readable" type="text" placeholder="Référence">
	<input ng-model="tyre.vehiculeType" type="text" placeholder="Type de véhicule">
	<input ng-model="tyre.pattern.height" type="text" placeholder="Hauteur">
	<input ng-model="tyre.pattern.width" type="text" placeholder="Largeur">
	<input ng-model="tyre.pattern.thickness" type="text" placeholder="Epaisseur">
	<br>
	<a action="save" ng-click="addTyre()">SAVE</a>
	<a action="cancel" ui-sref="home">CANCEL</a>
</tyre>	