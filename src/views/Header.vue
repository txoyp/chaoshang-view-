<template>
    <div style="background-color:rgb(245,245,242);">
        <div class="nav">
            <div class="nav-left">
                <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="2"><router-link to="/login">{{JSON.stringify(userInfo) === '{}' ? '未登录':userName}}</router-link></el-menu-item>
                    <el-menu-item index="3"><router-link to="/register">快速注册</router-link></el-menu-item>
                </el-menu>
                <div class="line"></div>
            </div>
            <div class="nav-right">
                <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">收藏夹</template>
                        <el-menu-item index="2-1">收藏的宝贝</el-menu-item>
                        <el-menu-item index="2-2">收藏的店铺</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">商品分类</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                    <el-menu-item index="5">导航5</el-menu-item>
                    <el-menu-item index="6">导航6</el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="container">
            <div id="logo">页面Logo</div>
            <div id="search">
                <el-input
                        prefix-icon="el-icon-search"
                        placeholder="请输入内容"
                        v-model="input10"
                        clearable>
                </el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>

            <div id="QRCode">二维码</div>
        </div>
        <div>
            <ul class="nav-list">
                <li class="nav-list-item">
                    <router-link to="/">首页</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/shop">商城</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/hotel">酒店</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/profile">我的</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/article">文章</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/information">大会信息</router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapState} from 'vuex'

    export default {

        components: {
            swiper,
            swiperSlide
        },

        data() {
            return {
                swiperOption:{
                    slidesPerView:3
                },

                input10: '',
                currentDate: new Date()
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            selectCategory(typeid,index){
                this.active = index;
            }
        },
        computed:{
            ...mapState(['userInfo'])
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        display: flex;
        padding: 0px 100px;
        border-bottom:1px solid #ccc ;
        background-color:white;
        position: relative;
    }
    .nav-left{
        flex: 1;
    }
    .nav-right{
        flex: 1;
        position: absolute;
        right:0;
        ul{
            float: right;
        }
    }
    .container{
        height: 5rem;
        border-bottom: 1px solid #ccc;
        padding: 0px 100px;
        display: flex;
        background-color:white;
    }
    #logo{
        flex: 0.5;
        line-height: 5rem;
    }
    #search{
        flex: 0.6;
        margin: 1rem 2rem;
        button{
            margin-right: -100px;
            margin-top: -10px;
        }
    }
    #QRCode{
        flex: 0.4;
        margin-right: 5rem;
        line-height: 5rem;
    }

    .nav-list{
        height: 3rem;
        background-color:#545c64;
        display: flex;
        line-height: 3rem;
        padding: 0 3rem;
        &-item{
            flex-grow:1;
            text-align: center;
            a{
                color: white;
                &.router-link-exact-active
                {
                    color: #ffd04b;
                }
            }

        }
    }
</style>