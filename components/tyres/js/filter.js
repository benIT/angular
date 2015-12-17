'use strict';

angular.module('utils', [])
  .factory('utils', function(){
    return{
      compareStr: function(stra, strb){
        stra = ("" + stra).toLowerCase();
        strb = ("" + strb).toLowerCase();
        return stra.indexOf(strb) !== -1;
      }
    };
  });
  

angular.module('filters',['utils'])
  .filter('tyreFilter', function(utils){

    return function(input, query){
      if(!query) return input;
      var result = [];

      angular.forEach(input, function(tyre){
        if(utils.compareStr(tyre.reference, query) ||
           utils.compareStr(tyre.vehiculeType, query) ||
           utils.compareStr(tyre.pattern.height, query) ||
           utils.compareStr(tyre.pattern.width, query) ||
           utils.compareStr(tyre.pattern.thickness, query))
          result.push(tyre);          
      });
      return result;
    };
  }).filter('tyreFilterPart', function(utils){

    return function(input, query){
      if(!query) return input;
      if(!query.reference && !query.vehiculeType && !query.pattern.height && !query.pattern.width && !query.pattern.thickness) return input;
      var result = [];

      angular.forEach(input, function(tyre){
        if(query.reference && utils.compareStr(tyre.reference, query.reference))
          result.push(tyre);
        if(query.vehiculeType && utils.compareStr(tyre.vehiculeType, query.vehiculeType))
          result.push(tyre);   
        if(query.pattern.height && utils.compareStr(tyre.pattern.height, query.pattern.height))
          result.push(tyre);   
        if(query.pattern.width && utils.compareStr(tyre.pattern.width, query.pattern.width))
          result.push(tyre);   
        if(query.pattern.thickness && utils.compareStr(tyre.pattern.thickness, query.pattern.thickness))
          result.push(tyre);          
      });

      return result;
    };
  });
