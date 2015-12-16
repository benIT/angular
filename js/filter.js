angular.module('utils', [])
    .factory('utils', function() {

      var paramPrivee = '';
      var methodePrivee= function(stra, strb) {
                stra = (paramPrivee + stra).toLowerCase();
                strb = (paramPrivee + strb).toLowerCase();
                return stra.indexOf(strb) !== -1;
            };
      

        return {
            compareStr: methodePrivee
        };
    });

angular.module('filters', ['utils'])
    .filter('tyreFilter', function(utils) {

        return function(input, query) {
            if (!query) return input;
            var result = [];

            angular.forEach(input, function(tyre) {
                if (utils.compareStr(tyre.reference, query) ||
                    utils.compareStr(tyre.vehiculeType, query))
                    result.push(tyre);
            });
            return result;
        };
    });
