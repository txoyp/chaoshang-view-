import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import WeChatLogin from './views/WeChatLogin.vue';
import FPassword from './views/FPassword.vue';
import MessageLogin from './views/MessageLogin.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',//hash
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/weChatLogin',
            name: 'weChatLogin',
            component:WeChatLogin ,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path:'/fPassword',
            component:FPassword
        },
        {
            path:'/messageLogin',
            component:MessageLogin
        }
    ],
});

// router.beforeEach((to, from, next) => {
//     //...
//     console.log(to);
//     console.log(from);
//     next();
// });
// router.afterEach((to, from) => {
//     // ...
//     console.log(111);
// });

export default router;
