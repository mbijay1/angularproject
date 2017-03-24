"use strict";
angular.module("app").service("checkboxService",[function(){
     this.students=[
        {id:"1",name:"Bijay Manandhar"},
        {id:"2",name:"Sudeep Shrestha"},
        {id:"3",name:"Shrawan Shrestha"},
        {id:"4",name:"Nikunj Chapagain"},
        {id:"5",name:"Jittu Kharka"},
        {id:"6",name:"Raju Bhusal"},
        {id:"7",name:"Kabir Shrestha"}
    ];
    this.date=new Date();
     this.presentStudents=[];
        this.reportArray=[];
       
    this.toggleStudents=(item)=>{
        var idx=this.presentStudents.indexOf(item);
        if(idx>-1){
            this.presentStudents.splice(idx,1); 
        }else{
            this.presentStudents.push(item);
        } 
    }
    
    this.submit=()=>{
    }
    
    
    
    
// // this.reportArray=[[]];
//    this.reportArray=[];
//    this.testArray=[];
//
//    this.submit=()=>{
//
//      for(let j=0;j<this.presentStudents.length;j++){
//          this.testArray[j]=this.presentStudents[j].name;
//
//       }
//         this.reportArray.push(this.date,this.testArray);
//
//        console.log(this.reportArray);
//    }
}]);