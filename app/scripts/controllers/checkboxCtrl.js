"use strict";
angular.module("app").controller("checkboxCtrl",["$scope","checkboxService",function($scope,cs){
    $scope.students=cs.students;
                console.log($scope.students);

   // $scope.date=cs.date;
    $scope.date-new Date();
//    $scope.toggleStudents=cs.toggleStudents;
    $scope.toggleStudents=(item)=>{
        cs.toggleStudents(item);
        $scope.show=0;
    }
   
    $scope.presentStudents=cs.presentStudents;

    $scope.test=()=>{
        //cs.submit();
        $scope.show=1;
        
        
 ////////////////////////////////////////////////////////////////////////////////////       
        var temp={}
        $scope.presentStudents.map(function(item){
                item.date=$scope.date;
            if(temp[item.date]==undefined){
                temp[item.date]=[];
            }
            if(temp[item.date])
                
                temp[item.date].push({"name":item.name});
        });
            cs.reportArray.push(temp);
            console.log(cs.reportArray);
        };

}]);