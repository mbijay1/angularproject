"use strict";
angular.module("app").directive("mainDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/main.html",
        controller:"mainCtrl"
    }
}]);