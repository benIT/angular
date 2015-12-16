<h1>Tyre:</h1>
<p>https://github.com/benIT/angular.git</p>
		
<a action="add" ng-click="showAddTyre(key)">+</a>

<list>
	<tyre ng-repeat="(key, tyre) in tyres">
		<reference>{{tyre.reference}}</reference>
		<vehiculeType>{{tyre.vehiculeType}}</vehiculeType>
		<pattern>
			<height>{{tyre.pattern.height}}</height>
			<width>{{tyre.pattern.width}}</width>
			<thickness>{{tyre.pattern.thickness}}</thickness>
		</pattern>
		<a action="edit" ng-href="#/edit/{{key}}">e</a>
		<a action="remove" ng-href="#/delete/{{key}}">-</a>
	</tyre>
</list>
<div ng-include="'partials/addTyre.tpl'" ng-show="displayForm"></div>
