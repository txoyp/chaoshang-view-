<template>
    <div>
        <Header></Header>
        <div class="container">
            <el-row :gutter="20">
                <el-col class="container-col" :span="4">
                    <div class="grid-content bg-purple">
                        <ul>
                            <!--无后端数据-->
                            <li @click="selectCategory(item.typeid,index)" :class="{active:active == index}" v-for="(item,index) in types" :key="index">
                                {{item.typename}}
                            </li>
                            <!--有后端数据-->
                            <!--<li v-for="(item,index) in type" :key="index">-->
                                <!--{{item.typename}}-->
                            <!--</li>-->
                        </ul>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content bg-purple-center" style="height: 400px">
                        <div class="content">
                            <p class="content-title"></p>
                            <swiper class="content-swiper" :options="swiperOption">
                                <swiper-slide  class="content-swiper-item" v-for="(item,index) in productList" :key="index">
                                        <div class="content-swiper-content" @click="goDetail(item._id)">
                                            <img :src="item.img">
                                            <div>{{item.name}}</div>
                                            <div>￥{{item.price}}</div>
                                        </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6" style="margin-top: 8rem;">
                    <div class="grid-content bg-purple">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item  title="公告" name="1">
                                <div>最新公告：xxxxxx；</div>
                            </el-collapse-item>
                            <el-collapse-item title="安全" name="2">
                                <div>安全须知：xxxxxx；</div>
                            </el-collapse-item>
                            <el-collapse-item title="反馈" name="3">
                                <el-form>
                                    <div style="width: 60%;">
                                        <el-input
                                                placeholder="请输入您要反馈的内容"
                                                v-model="input10"
                                                clearable>
                                        </el-input>
                                    </div>
                                    <div style="width: 20%;margin-left: 15rem;margin-top: -3.2rem">
                                        <el-button style="height: 38px" type="success" plain>提交</el-button>
                                    </div>
                                </el-form>
                            </el-collapse-item>
                            <el-collapse-item title="咨询" name="4">
                                <div>咨询电话：xxxxx；</div>
                                <div>地址：xxxxx；</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </el-col>
            </el-row>
            <!--轮播图-->
            <el-carousel style="height: 30rem;" indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <!--热门商品-->
            <!--<div class="hot">-->
                <!--<p class="hot-title">热门商品</p>-->
                <!--<swiper class="hot-swiper" :options="swiperOption">-->
                    <!--<swiper-slide class="hot-swiper-item" v-for="(item,index) in hotProducts" :key="index">-->
                        <!--<router-link to="/detail">-->
                            <!--<div class="hot-swiper-content">-->
                                <!--<img :src="item.img">-->
                                <!--<div>{{item.name}}</div>-->
                                <!--<div>￥{{item.price}}</div>-->
                            <!--</div>-->
                        <!--</router-link>-->
                    <!--</swiper-slide>-->
                <!--</swiper>-->
            <!--</div>-->

            <!--推荐商品-->
            <div class="variety">
                <p style="padding: 1rem;width: 10%;text-align: left;">推荐商品</p>
                <ul>
                    <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
                        <img :src="item.img" alt="">
                        <p>{{item.name}}</p>
                        <p>￥{{item.price}}</p>
                    </li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Header from '../../views/Header'
    import Footer from '../../views/Footer'
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapState} from 'vuex'

    export default {
        components: {
            swiper,
            swiperSlide,
            Header,
            Footer
        },

        created(){

            axios({
                url:url.getTypes
            }).then(res => {
                this.type = this.data;
                // this.selectCategory(this.typeId,this,active);    后台数据
                this.selectCategory(this.types.typeid,this,active);
                console.log(res);
            }).catch(err => {
                console.log(err);
            });

          // axios.get('https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250').then(res=>{
          //     console.log(res);
          // });
            let url1 = 'http://www.weichuang.com/getList';  //方法一
            let url2 = 'http://www.weichuang.com/getUser'; //方法二
            let url3 = 'http://www.weichuang.com/regexp'; //方法三
            let url4 = 'http://www.weichuang.com/list'; //方法四
            let url5 = url.getVarietyItem;
            axios.get(url5).then(res=>{
                        console.log(res);
                        this.varietyItem = res.data;
                    });
        },

        data() {
            return {

                activeName: '1',

                type:[],
                types:[
                    {
                        typeid:1,
                        typename:'衣服'
                    },
                    {
                        typeid:2,
                        typename:'包包'
                    },
                    {
                        typeid:3,
                        typename:'鞋子'
                    },
                    {
                        typeid:4,
                        typename:'T恤'
                    },
                    {
                        typeid:5,
                        typename:'电子商品'
                    },
                    {
                        typeid:6,
                        typename:'饰品'
                    },
                    {
                        typeid:7,
                        typename:'配件'
                    },
                    {
                        typeid:8,
                        typename:'办公'
                    }
                ],
                active:0,
                typeId:1,  //当前选中商品的ID
                start:0, //从第0条读取数据
                limit:10,//一次读取10调数据

                productList:[
                    {
                        "name": "  7250约翰迪尔",
                        "img": "http://img42.nongjx.com/2/20091222/633970900718437500_198_170_5.jpg",
                        "price": "面议",
                        "company": "北京市德乐机械有限公司",
                        "city": "北京市"
                    },
                    {
                        "name": "  优质4LZ-8型自走式谷物联合收割机",
                        "img": "http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png",
                        "price": "面议",
                        "company": "新疆机械研究院股份有限",
                        "city": "乌鲁木齐市"
                    },
                    {
                        "name": "  工农12K-700型马玲薯收获机",
                        "img": "http://img50.nongjx.com/2/20181025/636760630053845958277_198_170_5.jpg",
                        "price": "面议",
                        "company": "费县华源农业装备工贸有",
                        "city": "临沂市"
                    },
                    {
                        "name": "  玉米籽粒机",
                        "img": "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
                        "price": "面议",
                        "company": "河北中农博远农业装备有",
                        "city": "石家庄市"
                    },
                    {
                        "name": "  4LZ-2.0 自走式谷物联合收割机",
                        "img": "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
                        "price": "面议",
                        "company": "爱科（中国）投资有限公",
                        "city": "常州市"
                    },
                    {
                        "name": "  VB-VBP3100系列可变腔圆捆打捆机",
                        "img": "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
                        "price": "面议",
                        "company": "法国库恩公司",
                        "city": "北京市"
                    },
                    {
                        "name": "  4YZB-7七行玉米收获机",
                        "img": "http://img61.nongjx.com/2/20170607/636324420018937118413_198_170_5.png",
                        "price": "面议",
                        "company": "常州东风农机集团有限公",
                        "city": "常州市"
                    },
                    {
                        "name": "  摘棉机",
                        "img": "http://img42.nongjx.com/2/2008/20071030161017287_198_170_5.jpg",
                        "price": "面议",
                        "company": "约翰迪尔（中国）投资有",
                        "city": null
                    },
                    {
                        "name": "  玉米收获机",
                        "img": "http://img42.nongjx.com/2/2008/2007810231158117_198_170_5.jpg",
                        "price": "面议",
                        "company": "山东时风（集团）聊城农",
                        "city": null
                    },
                    {
                        "name": "  优质玉米秸秆自动捡拾打捆机",
                        "img": "http://img57.nongjx.com/2/20131107/635194288343054809839_198_170_5.jpg",
                        "price": "面议",
                        "company": "沈阳方科机械制造有限公",
                        "city": "沈阳市"
                    },
                    {
                        "name": "  畜牧固定秸秆打包机 加菌料青储打捆包膜机",
                        "img": "http://img49.nongjx.com/2/20180505/636611241104211752847_198_170_5.png",
                        "price": "15600",
                        "company": "曲阜洪升机械有限公司",
                        "city": "济宁市"
                    },
                    {
                        "name": "  菲马克FIMAKS青贮机",
                        "img": "http://img58.nongjx.com/2/20140530/635370579445169017353_198_170_5.jpg",
                        "price": "面议",
                        "company": "中机华联机电科技（北京",
                        "city": "北京市"
                    },
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

                varietyItem:[

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
            },
            goDetail(id){
                this.$router.push({
                   path:'/detail',
                   query:{
                       id:id
                   }
                });
                // this.$router.push({     刷新页面丢失参数
                //     name:'detail',
                //     params:{
                //         id:id
                //     }
                // });
                axios({

                }).then((res)=>{
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                });
            },
            selectCategory(typeid,index){
                this.active = index;
                // this.typeId = typeId;   后端数据
                this.types.typeid = typeid;

                this.getProductList();
            },
            getProductList(){   //当商品类型被选中时执行该函数
                axios({
                    url: url.getProductsByType,
                    method:'get',
                    params:{
                        // typeId:this.typeId,    后台数据
                        typeid:this.types.typeid,
                        start:this.start,
                        limit:this.limit

                    }
                }).then(res=>{
                    this.productList = res.data;
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                });
            }
        },
        computed:{
            ...mapState(['userInfo'])
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 84%;
        height: 20%;
        margin: 0 auto;
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
        li{
            font-size: 14px;
            padding: 1rem;
            list-style: none;
            border-bottom: 1px solid #fff;
        }
        .active{
            background:#fff;
        }
    }
    .bg-purple-center{
        background-color: #fff;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .leftContainer{
        flex: 0.3;
        height: 30rem;
        background-color: #eee;
        ul{
            margin-left: 0;
            margin-top: 0px;
        }

    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    

    .hot{
        p{
            padding: 1rem;
        }
        width: 100%;
        background-color: #fff;
        &-title{
            width: 10%;
            text-align: left;
            box-sizing: border-box;
        }
        &-swiper{
            margin-left: 1rem;
            &-content{
                width: 100%;
                text-align: center;
                img{
                    width: 25rem;
                    height: 18rem;
                }
            }
        }
    }
    .hot-swiper-item{
        a{
            color: black;
        }
    }

    /*热门商品*/
    .variety {
        background-color: #fff;
        text-align: center;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        &-item {
            flex-basis: 25%;
        }
        img {
            width: 16rem;
            height: 16rem;
        }
    }

    .content{
        width: 100%;
        background-color: #fff;
        height: 280px;
        padding:5rem 0;
        margin:0 1rem;
        &-title{
            width: 10%;
            text-align: left;
            box-sizing: border-box;
        }
        &-swiper{
            margin:0 1rem;
            &-content{
                width: 100%;
                text-align: center;
                img{
                    width: 25rem;
                    height: 18rem;
                }
            }
        }
        &-item {
            width: 100%;
            text-align: center;
            padding: 0 10px;
            img{
                width: 20rem;
                height: 20rem;
            }
        }
    }
    .content-swiper-item{
        a{
            color: black;
        }
    }
</style>