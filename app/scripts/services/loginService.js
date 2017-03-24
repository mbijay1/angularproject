"use strict";
angular.module("app").service("loginService",[function(){
    this.auth=false;
    var loginModel={
        username:"",
        password:""
    };
    var validUser=[
        {username:"",password:""},
        {username:"a",password:"a"}
    ];
    
    this.logout=()=>this.auth=false;
    
    this.validateUser=()=>{
        for(let i=0; i<validUser.length;i++){
            if(validUser[i].username==loginModel.username
              && validUser[i].password==loginModel.password){
                this.auth=true;
                break;
            }
        }
        return this.auth;
    }
    this.setUserName=(uname)=>loginModel.username=uname;
    this.setPassword=(pass)=>loginModel.password=pass;
}]);