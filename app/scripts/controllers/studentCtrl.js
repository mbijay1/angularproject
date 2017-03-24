"use strict";
angular.module("app").controller("studentCtrl",["$scope","formService",function($scope,fs){
    $scope.studentList=fs.studentArray;
    //console.log($scope.studentList);
}]);