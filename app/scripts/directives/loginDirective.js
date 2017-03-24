"use strict";
angular.module("app").directive("loginDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/login.html",
        controller:"loginCtrl"
    }
}]);
