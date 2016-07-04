(
function(){
    'use strict';
    angular.module("ekart.register")
    .controller("regCtrl",['$scope','countriesFactory','statesFactory',function($scope,countriesFactory,statesFactory){
        
        countriesFactory.getCountries().success(function(response){
            
            $scope.countries = response.countries;
            
        }).error(function(response){
            console.log(response);
        }) 
    
        statesFactory.getStates().success(function(response){
            var states = response.states;
            
            $scope.countryChanged = function(){
      
          console.log($scope.selectedCountry.countryName);
          $scope.states = [];
          angular.forEach(states,function(item){
              if(item.countryCode == $scope.selectedCountry.countryCode){
          $scope.states.push(item);
                  
      }
          });
          
      }
        }).error(function(response){
            console.log(response);
        })
      
        $scope.registerUser = {
            firstName:"",
            lastName:"",
            gender:"",
            age:"",
            email:"",
            country:"",
            state:""
        }
        
    $scope.register = function(){
        $scope.registerUser.country = $scope.selectedCountry.countryCode;
        $scope.registerUser.state = $scope.selectedState.stateCode ;
                            $scope.ifRegister = true;
                           console.log($scope.registerUser);
                           }
    
    
    
    }])
}
)();