<template>
    <div class="resgister-container">
        <div class="head">
            <div class="headleftspace"></div>
            <div class="headleft">
                <img src alt>
                <p>LOGO</p>
                <p>账号注册</p>
            </div>
            <div class="headmiddle"></div>
            <div class="headright">首页</div>
            <div class="headrightspace"></div>
        </div>
        <div class="demo-ruleForm login-page">
            <div class="detail-img">
                <img src="./img/1.jpg" alt="">
            </div>
            <div class="detail-operation">
                <h3 style="margin-right: 10rem">销量：{{detail.sold}}</h3>
                <router-link to="/navList"><el-button style="width:8rem;background-color: rgb(37,194,74);margin-right: 1rem" type="primary">返回</el-button></router-link>
                <router-link to="/shopCar"><el-button style="width:8rem;" type="primary">查看购物车</el-button></router-link>
            </div>
            <div class="detail-message">
                <h3>{{detail.name}}</h3>
                <div class="detail-price">价格：￥<span>{{detail.price}}</span></div>
                <div class="detail-kind">种类：{{detail.kind}}</div>
                <div class="detail-num">数量：<el-input-number class="detail-num-input" v-model="detail.num1" @change="handleChange" :min="1" :max="999" label="描述文字"></el-input-number></div>
                <h3>total:<span style="color: darkorange;">{{totalPrice}}</span></h3>
                <el-button type="warning" plain>立即购买</el-button>
                <el-button type="danger" plain>加入购物车</el-button>
            </div>
        </div>
        <div class="footer">Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号</div>
    </div>
</template>

<script>

    export default {
        name: "Detail",
        data() {
            return {
                detail: {
                    name: '商品名称',
                    price: '500',
                    sold:'1230',
                    kind:'商品种类',
                    num1:1
                },
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        },
        computed:{
            totalPrice(){
                let sum = 0;
                sum = this.detail.price * this.detail.num1;
                return sum;
            }
        }
    }
</script>

<style scoped lang="scss">
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

        .detail-img{
            height: 20rem;
            width: 20rem;

            img{
                height: 20rem;
                width: 20rem;
            }
        }

        .detail-operation{
            height: 8rem;
            width: 20rem;
            margin-top: 0.5rem;
        }

        .detail-message{
            width:50%;
            height: 30rem;
            margin-left: 22rem;
            margin-top: -30rem;
            button{
                width: 10rem;
                margin-top: 2.2rem;
            }
        }
        .detail-price{
            height: 2rem;
            width: 90%;
            text-align: left;
            padding: 1rem;
            span{
                color: darkorange;
            }
        }
        .detail-kind{
            height: 5rem;
            width: 90%;
            text-align: left;
            padding: 1rem;
        }
        .detail-num{
            height: 2rem;
            width: 90%;
            text-align: left;
            padding: 1rem;
            &-input{
                margin-left: 3rem;
            }
        }
        .footer {
            margin: 20px auto;
            width: 33%;
            color: #b6b6b6;
            font-size: 0.8em;
        }
    }
</style>