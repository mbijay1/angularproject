"use strict";
angular.module("app").directive("attendanceDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/attendance.html",
        controller:"studentCtrl"
    }
}]);
