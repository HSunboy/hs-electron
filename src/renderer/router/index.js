import Vue from 'vue'
import Router from 'vue-router'
import App from "view/main/App";
Vue.use(Router)

const index = resolve => require.ensure([], () => resolve(require("view/index/index")), "index");

export default new Router({
    routes:[{
        path: "/",
        component: App, //顶层路由，对应index.html
        children: [
            {
                path: '',
                redirect: 'index'

            },{
            path: "/index",
            component: index
    
        }]
    }]
}) ;