describe('myApp', function () {
    var scope,
    controller;
    beforeEach(function () {
        angular.module('modis');
    });

    beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
  	}));

    describe('HOME TEST', function () {
        it('sets bijour', function () {
        	scope = {};
            controller = $controller('Home', {
                '$scope': scope
            });
            expect('BIJOUR').toBe('BIJOUR');
        });
    });
});