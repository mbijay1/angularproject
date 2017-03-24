"use strict";
angular.module("app").controller("mainCtrl",["$scope","loginService",function($scope,ls){
    $scope.id=1;
    $scope.updateId=(id)=>{
        if(id==5){
            ls.logout();
        }
        $scope.id=id;
    }
}]);