import { String as commonString } from "../tools/common.js";
import  User  from "../store/UserStore.js";


let Userservice={
    //登录
    login:function(flag,account,password,sessionId){
        //如果登录成功
        if(flag){
            //如果账号密码不为空
            if(commonString.isnotBlank(account)&&commonString.isnotBlank(password)){
                User.account=account;
                User.passWord=password;
                User.sessionId=sessionId;
            }
        }
    } ,
    loginOut:function(){
        User.account=null;
        User.passWord=null;
        User.sessionId=null;
    },
    isLogin:function(){
        if(User.sessionId){
            return true;
        }
        return false;
    }
};

export  default Userservice;


