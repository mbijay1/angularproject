angular.module("app").controller("indexCtrl",["$scope","loginService",function($scope,ps){
    $scope.testString = "Hello World";
    $scope.auth=ps.auth;
    $scope.$watch(function(){
        return ps.auth;
    },function(newVal,oldVal){
        if(newVal!=oldVal){
            $scope.auth=newVal;
        }
    });
}]);