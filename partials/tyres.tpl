<h1>Tyre:</h1>
<p>https://github.com/benIT/angular.git</p>
		
<a action="add" ng-click="showAddTyre(key)">+</a>

<input ng-model="search" type="text" placeholder="Faites votre recherche" />
{{ search }}

<input ng-model="size" type="text" placeholder="Dimensions" />
{{ size }}


<select ng-model="orderby">
	<option value="reference" >Reference</option>
	<option value="vehiculeType" >VehiculeType</option>
	<option value="pattern.height" >Height</option>
	<option value="pattern.width" >Width</option>
	<option value="pattern.thickness" >Thickness</option>
</select>

<list>
	<tyre ng-repeat="tyre in tyres | filter : { vehiculeType : search, pattern:{height : size }} | orderBy : orderby">
		<reference>{{tyre.reference}}</reference>
		<vehiculeType>{{tyre.vehiculeType}}</vehiculeType>
		<pattern>
			<height>{{tyre.pattern.height}}</height>
			<width>{{tyre.pattern.width}}</width>
			<thickness>{{tyre.pattern.thickness}}</thickness>
		</pattern>
		<a action="edit" ng-href="#/edit/{{tyre.reference}}">e</a>
		<a action="remove" ng-href="#/delete/{{tyre.reference}}">-</a>
	</tyre>
</list>
<div ng-include="'partials/addTyre.tpl'" ng-show="displayForm"></div>
