
"use strict";
angular.module("app").directive("reportDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/report.html",
        controller:"reportCtrl"
    }
}]);