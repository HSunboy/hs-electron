<template>
    <div class="index">
    
        <div class="index-leftbox">
            <ul>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">教室是我家，学习爱我我爱他。</div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">教室是我家，学习爱我我爱他。</div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">
                            教室是我家，学习爱我我爱他。
                            <div class="user-right-imgbox">
    
                                <img src="~status/images/hdbanner.png">
                                <img src="~status/images/hdbanner.png">
    
                            </div>
    
                        </div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">教室是我家，学习爱我我爱他。</div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">
                            教室是我家，学习爱我我爱他。
                            <div class="user-right-imgbox">
    
                                <img src="~status/images/hdbanner.png">
                                <img src="~status/images/hdbanner.png">
    
                            </div>
    
                        </div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">
                            教室是我家，学习爱我我爱他。
                            <div class="user-right-imgbox">
    
                                <img src="~status/images/hdbanner.png">
                                <img src="~status/images/hdbanner.png">
    
                            </div>
    
                        </div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">教室是我家，学习爱我我爱他。</div>
                    </div>
                </li>
                <li>
                    <div class="user-left"><img src="~status/images/icon/main_icon.svg"></div>
                    <div class="user-right">
                        <div class="user-right-name">
                            <span class="right-username">我爱学习</span>
                            <span class="right-date">6月 27 15:45</span>
                        </div>
                        <div class="user-right-msg">教室是我家，学习爱我我爱他。</div>
                    </div>
                </li>
    
            </ul>
        </div>
        <div class="index-rightbox">
            <div class="peoplebox">
                <span class="people-title">在线成员</span>
                <ul>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                    <li><img src="~status/images/icon/main_icon.svg"></li>
                </ul>
            </div>
        </div>
    
    </div>
</template>

<script>
   
    
    import {
        webSocketResolve
    } from "network/baseNet.js";
    export default {
    
        data() {
            return {
    
            };
        },
        methods: {
            draw() {
                var ctx = document.getElementById('canvas').getContext('2d');
                // 画背景
                ctx.fillStyle = '#FD0';
                ctx.fillRect(0, 0, 75, 75);
                ctx.fillStyle = '#6C0';
                ctx.fillRect(75, 0, 75, 75);
                ctx.fillStyle = '#09F';
                ctx.fillRect(0, 75, 75, 75);
                ctx.fillStyle = '#F30';
                ctx.fillRect(75, 75, 75, 75);
                ctx.fillStyle = '#FFF';
    
                // 设置透明度值
                ctx.globalAlpha = 0.2;
    
                // 画半透明圆
                for (var i = 0; i < 7; i++) {
                    ctx.beginPath();
                    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
                    ctx.fill();
                }
            }
        },
        components: {
    
        },
        mounted() {
            // this.draw()
            const sock = new WebSocket("ws://localhost:8080");
            sock.addEventListener('open', function(event) {
                console.log("open success")
                sock.send(JSON.stringify({
                    cId:"newUserLogin",
                    data:{
                        userId:"admin",
                        pwd:"admin"
                    }
                }));
            });
    
            // Listen for messages
            sock.addEventListener('message', webSocketResolve(function(msg) {
                console.log(msg)
            }));
            sock.addEventListener('close', function(event) {
                console.log("close")
                console.log(event);
            });
            sock.addEventListener('error', function(event) {
                console.log("error")
                console.log(event);
            });
        }
    };
</script>

<style lang="scss" scoped>


.index{
    
    position:relative;
    .index-leftbox{
       
        overflow:auto;
        top:0px;
        bottom:0px;
        left:0px;
        right:300px;
        position:absolute;
        ul{
            list-style-type: none;
            padding:15px 30px;
            li{
                
                
                width:100%;
                box-sizing:border-box;
                padding-bottom:30px;
                display:flex;
                .user-left{
                    width:40px;
                    height:40px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .user-right{
                    padding-left:20px;
                     flex-grow:1;
   
                     flex-shrink:1;
                     .user-right-name{
                         font-size:18px;
                         
                     }
                     .user-right-msg{
                         font-size:18px;
                         padding-top:8px;
                         color:#333;
                         .user-right-imgbox{
                            padding-top:10px;
                            img{
                             width:100px;
                             height:100px;
                            
                             border:1px #f5f5f5 solid;
                             padding:5px 5px;
                         }
                         }
                         
                     }
                     .right-username{
                        color:#666;
                     }
                     .right-date{
                         float:right;
                         color:#888;
                     }
                }
            }
        }

       

    }
    .index-rightbox{
        overflow:auto;
        top:0px;
        bottom:0px;
        right:0px;
        position:absolute;
        width:300px;
         .peoplebox{
             margin-top:20px;
            padding-left:15px;
            .people-title{
                font-size:16px;
                line-height:30px;
                color:#CDCDCD;

            }
            ul{
                 list-style-type: none;
                 li{
                     display: inline-block;
                    width:40px;
                    height:40px; 
                    img{
                        width:100%;
                        height:100%;
                    }
                 }
            }
        }
    }
}
   
   
     
</style>