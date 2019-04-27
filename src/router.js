import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/Login"
import {getItem} from "@/helpers/localStorage"
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { 
            path: '/login', 
            component: Login,
            name: "login"
         },
        {
            path: '/dashboard',
            component: () => import("@/views/Dashboard"),
            name: "dashboard",
            meta: {
                requiredAuth: true
            }
        },
        {
            path: '/about',
            component: () => import("@/views/About"),
            name: "about",
            meta: {
                requiredAuth: true
            }
        },
        {
            path:'*', redirect: '/dashboard'
        }
    ],
    mode: "history"
});


router.beforeEach((to, from, next) => {
    const isAuthenticated = !!getItem("qw_tk_vue");
    if(to.meta.requiredAuth){
        if(isAuthenticated){
            next()
        }else{
            next({
                name: "login"
            })
        }
    }else{
        if(isAuthenticated){
            next({
                name: "dashboard"
            })
        }
        next()
    }
});

export default router;
