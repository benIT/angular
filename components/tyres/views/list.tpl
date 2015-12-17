<input class="filter" ng-model="search" type="text" placeholder="Recherche"/><br/><br/>
<label  class="filter">Ref : </label>
<input ng-model="searchReference" type="text" placeholder="Filtre type"/>
<label>{{'type' | translate}}</label>
<input ng-model="searchType" type="text" placeholder="Filtre type"/>
<label>H : </label>
<input ng-model="searchHeight" type="text" placeholder="Filtre Height"/>
<label>W : </label>
<input ng-model="searchWidth" type="text" placeholder="Filtre Width"/>
<label>T : </label>
<input ng-model="searchThickness" type="text" placeholder="Filtre Thickness"/>
<br/><br/>

<a action="add" ui-sref="tyres.subviewadd({action:'add'})">+</a>

<!-- a redefinir pour une map
<select ng-model = "selectedOrder">
	<option value="reference">Reference</option>
	<option value="vehiculeType">VehiculeType</option>
	<option value="pattern.height">Height</option>
	<option value="pattern.width">Width</option>
	<option value="pattern.thickness">Thickness</option>
</select>-->
<list>
	<tyre ng-repeat="(ref, tyre) in tyres | tyreFilter : search | tyreFilterPart:{reference:searchReference, vehiculeType:searchType, pattern:{width:searchWidth, height:searchHeight, thickness:searchThickness}}"> <!--" | orderBy : selectedOrder">-->
		<reference>{{tyre.reference}}</reference>
		<vehiculeType>{{tyre.vehiculeType}}</vehiculeType>
		<pattern>
			<height>{{tyre.pattern.height}}</height>
			<width>{{tyre.pattern.width}}</width>
			<thickness>{{tyre.pattern.thickness}}</thickness>
		</pattern>
		<a action="edit" ui-sref="tyres.subview({action:'edit',key:ref})">e</a>
		<a action="remove" ui-sref="tyres.subview({action:'delete',key:ref})">-</a>
	</tyre>
</list>


<select ng-model="lang" ng-change="changeLang()">
	<option value="en">EN</option>
	<option value="fr">FR</option>
</select>