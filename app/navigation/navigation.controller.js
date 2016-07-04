(
function(){
    'use strict';
    
    function navCtrlFn($scope){
        $scope.brandname = "EKART";
    }
    
    angular.module("ekart.navigation")
    .controller("navCtrl",['$scope',navCtrlFn]);
}
)();