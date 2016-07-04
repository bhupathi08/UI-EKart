(
function(){
    'use strict';
    angular.module('ekart.common').factory("countriesFactory",['$http',function($http){
        var countries;
        return{
            getCountries: function(){
                return $http.get('/app/data/countries.json');
                }
        }
    }])
}
)();