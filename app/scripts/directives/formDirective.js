"use strict";
angular.module("app").directive("formDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/studentForm.html",
        controller:"formCtrl" 
    }
}]);