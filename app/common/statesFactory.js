(
function(){
    'use strict';
    angular.module("ekart.common").factory("statesFactory",["$http",function($http){
        return{
            getStates: function(){
                return $http.get("/app/data/states.json");
            }
        }
    }])
}
)();