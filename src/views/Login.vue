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

        <el-form
                :model="ruleForm2"
                :rules="rules2"
                status-icon
                ref="ruleForm2"
                label-position="left"
                label-width="0px"
                class="demo-ruleForm login-page"
        >
            <h3 class="title">用户登录</h3>
            <Upload></Upload>
            <el-form-item style="margin-top: 10px" prop="loginUsername">
                <el-input type="text" clearable auto-complete="off" placeholder="用户名/用户手机号" v-model="ruleForm2.loginUsername"></el-input>
            </el-form-item>
            <el-form-item prop="loginPassword">
                <el-input type="password" clearable auto-complete="off" placeholder="密码" v-model="ruleForm2.loginPassword"></el-input>
            </el-form-item>

            <div class="float">
                <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
                <div class="find">
                    <span>忘记密码？</span>
                    <router-link to="/fPassword">找回密码</router-link>
                </div>
            </div>
            <el-form-item style="width:100%;">
                <router-link to="/"></router-link>
                <el-button type="primary" style="width:100%;" @click="handleSubmit();loginHandler()">登录</el-button>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="success" style="float: left; width:35%;" @click="handleSubmit">微信登录</el-button>
                <router-link to="/messageLogin">
                    <el-button type="success" style="float: right;width:35%;" @click="">短信登录</el-button>
                </router-link>
            </el-form-item>
            <div class="register">
                <router-link to="/register">注册账号</router-link>
            </div>
        </el-form>
        <div class="footer">Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号</div>
    </div>
</template>

<script>

    import Upload from '../upload/Upload'
    import axios from 'axios'
    import { mapActions } from 'vuex'
    import url from '@/service.config.js'

    export default {
        name:'upload',
        components:{
          Upload
        },
        data() {
            return {
                resgistering: false,
                ruleForm2: {
                    loginUsername:'',
                    loginPassword:''
                },
                rules2: {
                    loginUsername: [
                        {
                            required: true,
                            message: "please enter your account",
                            trigger: "blur"
                        }
                    ],
                    loginPassword: [
                        { required: true, message: "enter your password", trigger: "blur" }
                    ]
                },
                checked: false,
                logining:'',
            };
        },
        methods: {

            handleSubmit(event) {
                this.$refs.ruleForm2.validate(valid => {
                    if (valid) {
                        this.resgistering = true;
                        if (
                            this.ruleForm2.loginUsername === "admin" &&
                            this.ruleForm2.loginPassword === "123456"
                        ) {
                            this.resgistering = false;
                            sessionStorage.setItem("user", this.ruleForm2.loginUsername);
                            this.$router.push({ path: "/" });
                        } else {
                            this.resgistering = false;
                            this.$alert("username or password wrong!", "info", {
                                confirmButtonText: "ok"
                            });
                        }
                    } else {
                        console.log("error submit!");
                        return false;
                    }
                    if (
                        this.ruleForm2.loginUsername === "" ||
                        this.ruleForm2.loginPassword === ""
                    ) {
                        this.resgistering = false;
                        this.$alert("username or password is Null!", "info", {
                            confirmButtonText: "ok"
                        });
                    }
                });
            },

            //登录的处理方法
            loginHandler(){
                    axios({
                        url:url.loginUser,
                        method:'post',
                        data:{
                            userName:this.ruleForm2.loginUsername,
                            password:this.ruleForm2.loginPassword
                        }
                    }).then(res => {
                        //判断状态码(自定义)
                        if(res.data.code === 200 ){
                            // 模拟网络环境延迟   对异步操作的管理
                            new Promise((resolve,reject)=>{
                                setTimeout(()=>{
                                    resolve();
                                    // resolve(参数);
                                },1000);
                            }).then(()=>{     //。then((参数)=>{})
                                this.$message.success('登录成功！');
                                //保存登录状态     *****
                                this.loginAction(res.data.userInfo);          //后台要为前端提供userInfo的一个对象

                                this.$router.go(-1);           //跳转页面
                            }).catch(err=>{
                                this.$message.error('保存登录状态失败！');
                                console.log(err);
                            });

                        }
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                        this.$message.error('登录失败！');
                    });
                //待删
                this.$router.push('/');
            }
        },
        computed:{
            ...mapActions(['loginAction'])
        }
    };
</script>

<style scoped lang="scss">
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 100px auto;
        width: 350px;
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
        .footer {
            margin: 20px auto;
            width: 33%;
            color: #b6b6b6;
            font-size: 0.8em;
        }
    }
</style>
