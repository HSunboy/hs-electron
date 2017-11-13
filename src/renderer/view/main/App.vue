<template>
    <div class="main-box">
        <img src="~status/images/icon/logo.png" class="logo">
        <div class="left-menu">
            <div class="menu-msg">
                爱 </br> Study 也爱 </br> {{titleText}}
            </div>
            <span class="today_title">今日推荐</span>
            <ul class="today_content">
                <li><a href="#">中华人民共和国今天成立啦</a></li>
                <li><a href="#">什么？我大清亡了！</a></li>
                <li><a href="#">也许，这一切都是命运石之门的选择吧</a></li>
            </ul>
            <div class="today_content">
                github.com/HSunboy
            </div>
        </div>
        <div class="right-content">
            <div class="top-menu">
                <img class="main_icon" src="~status/images/icon/main_icon.svg">
                <span class="title">Study/Work</span>
                <a href="javascript:void(0)" @click="happyChange">
                    <img class="icon" :src="icon">
                </a>
            </div>
            <router-view class="router-view"></router-view>
        </div>
    
    
    
    </div>
</template>

<script>
    import happy from "status/images/icon/happy.svg"
    import unHappy from "status/images/icon/unhappy.svg"
    import typeWriter from "tools/msgChange.js";
    let titleChange = [{
        type: "add",
        msg: "Work",
        time: 200
        
    
    }, {
        type: "remove",
        count: 4,
        time: 100
    }, {
        type: "add",
        msg: "Talking",
        time: 100
    
    }, {
        type: "remove",
        count: 7,
        time: 50
    }, {
        type: "add",
        msg: "sport",
        time: 100
    }, {
        type: "remove",
        count: 4,
        time: 100
    },{
        type: "add",
        msg: "leeping",
        time: 100
    },{
         type: "remove",
        count: 8,
        time: 50
    },{
        type: "add",
        msg: "money",
        time: 300
    },{
        type:"remove",
        count:5,
        time:100
        
    },{
        type: "add",
        msg: "life",
        time: 300
    },{
        type:"add",
        msg:"eeeeee",
        time:200,
        repeat:true
    },{
        type:"remove",
        count:6,
        time:100,
        repeat:true
    }]
    
    export default {
        data() {
            return {
                icon: happy,
                titleText: ""
            };
        },
        methods: {
            happyChange: function() {
                this.$data.icon = this.$data.icon == happy ? unHappy : happy;
            }
        },
        watch: {
    
        },
        mounted() {
            var that = this;
            var typeWrite = new typeWriter(titleChange, function(msg) {
                that.$data.titleText = msg;
            });
            setTimeout(function() {
                typeWrite.run();
            }, 1000)
    
        }
    
    };
</script>

<style lang="scss">
@import  '../../status/css/common.css';
	.logo{
        width:80px;
        
        position: absolute;
        top: 25px;
        left: 35px;
    }
    .main-box{
        display:flex;
       
        height: 100%;
    }

.left-menu{
    -webkit-app-region:drag;
    color:#FFF;
    background:url("~status/images/back.jpg") no-repeat center center;
    background-size:cover;
    width:300px;
    height:100%;
    padding:20px;
    box-sizing:border-box;
    .menu-msg{
        width:100%;
        line-height:45px;
        font-size:47px;
        font-weight:300;
        margin: 10vh 0 5vh 15px;
        height:135;
        color:#FFF;
    }
    .today_title{
        color:#FFF;
        font-weight:300;
        letter-spacing: 2px;
        margin-left: 15px;
    }
    .today_content{
        width: 100%;
        letter-spacing: 2px;
        background-color: rgba(255,255,255,.1);
        font-size: 12px;
        padding: 1vh 15px;
        margin: 1vh 0;
        box-sizing: border-box;
        list-style: none;
        font-weight:300;
        li{
            line-height:20px;
        }
    }
}
.right-content{
    flex-grow:1;
    background:#FFF;
    display:flex;
    flex-direction: column;
    flex-shrink:1;
    .top-menu{
        -webkit-app-region:drag;
        width:100%;
        background-image: linear-gradient(to left,#cc2b5e,#753a88);
        height:50px;
        display:flex;
        align-items:center;
        .main_icon{
           width:40px;
           height:40px;
           padding-left:20px;
        }
        .title{
            padding-left:8px;
            font-size:26px;
            font-weight: 300;
            color:#FFF;
            flex-grow:1;
            flex-shrink:1;
            
        }
        .icon{
           padding-right:5px;
            width:30px;
            height:30px;
        }
    }
    .router-view{
        flex-grow:1;
        width:100%;
    }
}
   
</style>
