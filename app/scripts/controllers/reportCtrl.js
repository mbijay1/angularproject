"use strict";
angular.module("app").controller("reportCtrl",["$scope","checkboxService",function($scope,cs){

    $scope.reportArray=cs.reportArray;
    console.log($scope.reportArray);

}]);