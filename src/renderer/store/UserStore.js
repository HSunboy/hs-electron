import {String as commonString} from "../tools/common.js";
let store={
    account:"",
    userName:"",
    passWord:"",
    age:"",
    sessionId:""
};

let User={
    get account(){
        return store.account;
    },
    set account(account){
        commonSet("account",account);
    },
    get userName(){
        return store.userName;
    },
    set userName(userName){
        commonSet("userName",userName);
    },
    get passWord(){
        return store.passWord;
    },
    set passWord(passWord){
        commonSet("passWord",passWord);
    },
    get age(){
        return store.userName;
    },
    set age(age){
        commonSet("age",age);
    },
    get sessionId(){
        return store.sessionId;
    },
    set sessionId(sessionId){
        commonSet("sessionId",sessionId);
    }
};  


initUser();


export  default User;

//判断value是否为空，若为空，则设置为“”，最后再存入本地存储
function commonSet(key,value){
    if(commonString.isBlank(value)){
        store[key]="";
    }else{
        store[key]=value;
    }
    window.localStorage[key]=value;
}

//初始化用户数据
function initUser(){
    for(let key of Object.keys(store)){
        console.log(key);
        initValue(key);
    }
}

//处理详细数据
function initValue(key){
    
    User[key]=window.localStorage[key]||"";
    
}


