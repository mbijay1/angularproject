"use strict";
angular.module("app").service("formService",[function(){
    var form={
        firstName:"",
        lastName:"",
        address:"",
        dob:"",
        phone:"",
        gender:"",
        email:"",
        git:""
    };
    this.studentArray=[];
    
//    this.setFirstName=(fname)=>form.firstName=fname;
//    this.setLastName=(lname)=>form.lastName=lname;
//    this.setAddress=(address)=>form.address=address;
//    this.setDob=(dob)=>form.dob=dob;
//    this.setPhone=(phone)=>form.phone=phone;
//    this.setGender=(gender)=>form.gender=gender;
//    this.setEmail=(email)=>form.email=email;
//    this.setGit=(git)=>form.git=git;
}]);