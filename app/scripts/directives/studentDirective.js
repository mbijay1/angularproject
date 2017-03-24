"use strict";
angular.module("app").directive("studentDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/student.html",
        controller:"studentCtrl" 
    }
}]);