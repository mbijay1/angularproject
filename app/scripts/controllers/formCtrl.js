"use strict";
angular.module("app").controller("formCtrl",["$scope","formService",function($scope,fs){
    
    $scope.formModelArray=fs.studentArray; 
 
    $scope.submit=()=>{
        
        var formModel={
        firstName:$scope.formModel.fname,
        lastName:$scope.formModel.lname,
        address:$scope.formModel.address,
        dob:$scope.formModel.dob,
        phone:$scope.formModel.phone,
        gender:$scope.formModel.gender,
        email:$scope.formModel.email,
        git:$scope.formModel.git
        }     
       fs.studentArray.push(formModel);     
        console.log($scope.formModelArray)
    }
}]);