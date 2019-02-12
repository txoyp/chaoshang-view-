import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import FPassword from './views/FPassword.vue'
import MessageLogin from './views/MessageLogin.vue'
import Upload from './upload/Upload.vue'
import SignUp from './views/SignUp.vue'
import NavList from './views/shop/NavList.vue'
import Detail from './views/shop/Detail.vue'
import ShopCar from './views/shop/ShopCar.vue'
import MemberSelect from './views/shop/MemberSelect.vue'
import LogisticInform from './views/shop/LogisticInform.vue'

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
        },
        {
            path:'/upload',
            component:Upload
        },
        {
            path:'/signUp',
            component:SignUp
        },
        {
            path:'/navList',
            component:NavList
        },
        {
            path:'/detail',
            component:Detail
        },
        {
            path:'/shopCar',
            component:ShopCar
        },
        {
            path:'/memberSelect',
            component:MemberSelect
        },
        {
            path:'/logisticInform',
            component:LogisticInform
        },
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
