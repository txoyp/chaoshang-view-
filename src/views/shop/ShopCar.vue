<template>
    <div>
        <Header></Header>
        <div class="demo-ruleForm login-page">
            <div class="cart-item">
                <van-card v-for="(item,index) in productList" :key="index" :price="item.price" :desc="item.company"
                          :title="item.name" :thumb="item.img">
                </van-card>
                <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"/>
                <div slot="footer">
                    <van-button @click="delCart(item._id,index)" style="margin-left: 52rem;margin-bottom: 10px" size="mini">删除</van-button>
                </div>
            </div>
            <div class="cart-bottom">
                <van-submit-bar class="submit-bar"
                        :price="totalPrice"
                        button-text="提交订单"
                        @submit="onSubmit"
                />
            </div>
        </div>
    <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../Header'
    import Footer from  '../Footer'
    import { mapState } from 'vuex'
    import axios from 'axios'
    import url from '@/service.config.js'

    export default {
        name: "ShopCar",
        components:{
          Header,Footer
        },
        data(){
            return{
                imageURL:"//m.360buyimg.com/babel/jfs/t1/17766/10/6491/91290/5c52a307Ea7480c8b/de9190f29529d087.jpg",
                productList:[],
            }
        },
        created(){

            //验证用户是否登陆
            // if(JSON.stringify(this.userInfo) === '{}'){
            //     this.$message.error('请先登录！');
            //     setTimeout(()=>{
            //         this.$router.push('/login')
            //     },1000)
            // }
            // else {
            //     axios({
            //         url:url.getCart,
            //         method:'get',
            //         params:{
            //             userId:this.userInfo._id
            //         }
            //     }).then(res=>{
            //         for(let item of res.data){
            //             this.productList.push(item.productId)
            //         }
            //     }).catch(err=>{
            //
            //     });
            // }
        },
        methods:{
            onSubmit(){
                this.$message.success('提交成功！');
                this.$router.push('/pay');   //跳转到付款界面
            },
            delCart(){
                //删除数据库中的数据，如果删除成功 ,进入回调函数，在回调函数中如下代码

                this.productList.splice(index,1)
            }
        },
        computed:{
            ...mapState(['userInfo']),
            totalPrice(){
                return this.productList.reduce((sum,elem)=>{
                    sum += elem.price;
                    return sum;
                },0) * 100;
            }
        }

    }
</script>

<style lang="scss" scoped>
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 100px auto;
        width: 50%;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .float {
            display: flex;
            width: 100%;
            .find{
                display: flex;
                margin-left: 40%;
                color: #797979;
                font-size: 0.8em;
            }
            .find a{
                color: #797979;
                text-decoration: none;
            }
        }
        .register{
            color: #797979;
            font-size: 0.8em;
            text-align: left;
        }
        .register a{
            color: #797979;
            text-decoration: none;
        }
        .title{
            margin-top: -10px;
        }
    }
    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }

    .resgister-container {
        width: 100%;
        height: 100%;
        .head {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            padding-top: 2%;
            .headleftspace {
                width: 15%;
            }
            .headmiddle {
                width: 75%;
            }
            .headleft {
                display: flex;
                width: 200px;
            }
            .headright {
                float: right;
                width: 100px;
                color: #3f3f3f;
            }
        }
        label.el-checkbox.rememberme {
            margin: 0px 0px 15px;
            text-align: left;
        }
    }
    .cart-bottom{
        position: relative;
        height: 5rem;
    }
    .submit-bar{
        width: 100%;
        position: absolute;
        bottom: 1rem;
    }
</style>