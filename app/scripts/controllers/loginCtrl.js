"use strict";
angular.module("app").controller("loginCtrl",["$scope","loginService",function($scope,ls){
    $scope.loginModel={
        username:"",
        password:""
    };
    $scope.login=()=>{
        ls.setUserName($scope.loginModel.username);
        ls.setPassword($scope.loginModel.password);
        console.log($scope.loginModel);
        ls.validateUser();
    }
}]);