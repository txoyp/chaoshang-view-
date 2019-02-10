<template>
    <div style="background-color:rgb(245,245,242);">
        <div class="nav">
            <div class="nav-left">
                <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">欢迎来到商城！</el-menu-item>
                    <el-menu-item index="2"><router-link to="\">请登录</router-link></el-menu-item>
                    <el-menu-item index="3"><router-link to="register">快速注册</router-link></el-menu-item>
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
        <div style="height:38px;background-color:#545c64;color:white">

        </div>
        <div class="containerMain">
            <div class="leftContainer">
                <ul>
                    <li>菜单1</li>
                    <li>菜单2</li>
                    <li>菜单3</li>
                    <li>菜单4</li>
                    <li>菜单5</li>
                    <li>菜单6</li>
                </ul>
            </div>
            <div class="centerContainer">
                <el-carousel :autoplay="4000" arrow="always">
                    <el-carousel-item v-for="(item,index) in carouselItem" :key="index">
                        <img :src="item.imgSrc" alt="">
                    </el-carousel-item>
                </el-carousel>
                <div class="footContainer">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="(item,index) in cardItem" :key="index">
                            <img :src="item.img" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="rightContainer">

            </div>
            <!--热门商品-->

        </div>
        <div class="hot">
            <p class="hot-title">热门商品</p>
            <swiper class="hot-swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in hotProducts" :key="index">
                    <div class="hot-swiper-content">
                        <img :src="item.img">
                        <div>{{item.name}}</div>
                        <div>￥{{item.price}}</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="footer">Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号</div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {

        components: {
            swiper,
            swiperSlide
        },

        data() {
            return {

                carouselItem:[  //主轮播图
                    {
                        name:'img1',
                        imgSrc:'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
                    },{
                        name:'img2',
                        imgSrc:'//img.alicdn.com/tps/i4/TB1BpkFEgDqK1RjSZSywu1xEVXa.png_q90_.webp',
                    },{
                        name:'img3',
                        imgSrc:'//img.alicdn.com/tfs/TB1S83hEirpK1RjSZFhXXXSdXXa-520-280.png_q90_.webp',
                    },{
                        name:'img4',
                        imgSrc:'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg',
                    }
                ],

                cardItem:[ //次轮播图
                    {
                        name:'img1',
                        img:'https://gtms01.alicdn.com/tps/i1/TB12EhzIXXXXXbMXpXXDgwcQVXX-375-130.jpg',
                    },{
                        name:'img2',
                        img:'https://gtms02.alicdn.com/tps/i2/TB1ZeJGIXXXXXcnXXXXDgwcQVXX-375-130.jpg',
                    },{
                        name:'img3',
                        img:'https://gtms03.alicdn.com/tps/i3/TB197VzIXXXXXbJXpXXDgwcQVXX-375-130.jpg',
                    },{
                        name:'img4',
                        img:'//gtms02.alicdn.com/tps/i2/TB1ZeJGIXXXXXcnXXXXDgwcQVXX-375-130.jpg',
                    }
                ],

                hotProducts:[   //热门商品
                    {
                        name:"商品名称",
                        img:"//m.360buyimg.com/babel/jfs/t1/17766/10/6491/91290/5c52a307Ea7480c8b/de9190f29529d087.jpg",
                        price:"商品价格",
                        company:"公司名称",
                        city:"商品产地"
                    }, {
                        name:"商品名称",
                        img:"//img1.360buyimg.com/pop/jfs/t1/24987/2/6416/100444/5c507c95E5d55263d/109b43561f2f0411.jpg",
                        price:"商品价格",
                        company:"公司名称",
                        city:"城市"
                    }, {
                        name:"商品名称",
                        img:"//m.360buyimg.com/babel/jfs/t1/17766/10/6491/91290/5c52a307Ea7480c8b/de9190f29529d087.jpg",
                        price:"商品价格",
                        company:"公司名称",
                        city:"城市"
                    }, {
                        name:"商品名称",
                        img:"//m.360buyimg.com/babel/jfs/t1/17766/10/6491/91290/5c52a307Ea7480c8b/de9190f29529d087.jpg",
                        price:"商品价格",
                        company:"公司名称",
                        city:"城市"
                    },{
                        name:"商品名称",
                        img:"//m.360buyimg.com/babel/jfs/t1/17766/10/6491/91290/5c52a307Ea7480c8b/de9190f29529d087.jpg",
                        price:"商品价格",
                        company:"公司名称",
                        city:"城市"
                    },
                ],
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
            }
        },
    }
</script>

<style lang="scss" scoped>
    .nav{
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 0px 100px;
        background-color:white;
    }
    .nav-left{
        flex: 1;
    }
    .nav-right{
        flex: 1;
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
        margin: 1.5rem 2rem;
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
    .containerMain{
        width: 86%;
        margin: 0px 100px;
        background-color:white;
        display: flex;
    }
    .leftContainer{
        flex: 0.3;
        height: 30rem;
        ul{
            margin-left: 0;
            margin-top: 0px;
            li{
                margin-left: -40px;
                padding: 1rem;
                list-style: none;
                border-bottom: 1px solid #000000;

            }
        }
    }
    .centerContainer{
        flex: 1;
        height: 30rem;

    }
    .centerContainer img{
        width: 800px;

    }
    .footContainer{
        height: 11.3rem;
        img{
            height:200px;

        }
    }
    .rightContainer{
        flex: 0.4;
        height: 30rem;
        margin-right: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .hot{
        p{
            padding: 1rem;
        }
        margin-top: 1rem;
        margin-left: 6.3rem;
        width: 86%;
        background-color: #fff;
        &-title{
            width: 20%;
            text-align: left;
            box-sizing: border-box;
        }
        &-swiper{
            margin-left: 1rem;
            &-content{
                width: 10rem;
                text-align: center;
                img{
                    width: 18rem;
                    height: 18rem;
                }
            }
        }
    }

    .footer {
        margin: 20px auto;
        width: 33%;
        color: #b6b6b6;
        font-size: 0.8em;
    }
</style>