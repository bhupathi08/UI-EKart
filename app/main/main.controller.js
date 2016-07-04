(
function(){
    
    'use strict';
    angular.module("ekart.main")
    .controller("mainCtrl",['$scope',function($scope){
        
        $scope.content = "I am the content";
        $scope.handleClick = function(){
            $scope.content = "This is the new meeee :D";
        }
        
        $scope.loadContent = function(type){
            if(type == 'register'){
                $scope.contentUrl = "/app/register/register.tpl.html"
            }
            if(type == 'Home'){
                $scope.contentUrl = "/app/startPage/startPage.tpl.html"
            }
        }
    }]);    
}
)();