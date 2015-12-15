<h1>Tyre:</h1>
<p>https://github.com/benIT/angular.git</p>
		
<event action="add" ng-click="showAddTyre(key)">+</event>

<list>
	<tyre ng-repeat="(key, tyre) in tyres">
		<reference>{{tyre.reference}}</reference>
		<vehiculeType>{{tyre.vehiculeType}}</vehiculeType>
		<pattern>
			<height>{{tyre.pattern.height}}</height>
			<width>{{tyre.pattern.width}}</width>
			<thickness>{{tyre.pattern.thickness}}</thickness>
		</pattern>
		<event action="edit" ng-click="showEditTyre(key)">e</event>
		<event action="remove" ng-click="removeTyre(key)">-</event>
	</tyre>
</list>
<div ng-include="'partials/addTyre.tpl'"></div>
