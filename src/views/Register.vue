<template>
    <div class="resgister-container">
        <div class="head">
            <div class="headleftspace">

            </div>
            <div class="headleft">
                <img src="" alt="">
                <p>LOGO</p>

                <p>账号注册</p>
            </div>
            <div class="headmiddle">

            </div>
            <div class="headright">
                首页
            </div>
            <div class="headrightspace">

            </div>
        </div>
        <el-form
                :model="ruleForm2"
                :rules="rules2"
                status-icon
                ref="ruleForm2"
                label-position="left"
                label-width="80px"
                class="demo-ruleForm resgister-page"
        >
            <Upload></Upload>
            <h3 class="title">账户设置</h3>
            <el-form-item prop="regUsername" label="用户名">
                <el-input type="text" auto-complete="off" placeholder="用户名" v-model="ruleForm2.regUsername"></el-input>
            </el-form-item>
            <el-form-item prop="regPassword" label="密码">
                <el-input type="password"  auto-complete="off" placeholder="密码" v-model="ruleForm2.regPassword"></el-input>
            </el-form-item>
            <el-form-item prop="regCheckPassword" label="确认密码">
                <el-input type="password"  auto-complete="off" placeholder="再次输入密码" v-model="ruleForm2.regCheckPassword"></el-input>
            </el-form-item>
            <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox> --->
            <br/>
            <div class="hr"></div>
            <h3 class="title">基本信息</h3>
            <el-form-item prop="username" label="手机号">
                <el-input type="text" auto-complete="off" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="username" label="验证码">
                <el-input type="text" auto-complete="off" placeholder="验证码" style="width:60%;"></el-input>
                <el-button style="width:40%">验证码</el-button>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button :plain="true" type="primary" style="width:100%;" @click="registerHandler();handleSubmit()">注册</el-button>
            </el-form-item>
        </el-form>
        <div class="footer">
            Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号
        </div>
    </div>
</template>

<script>

    import Upload from '../upload/Upload'

    import axios from 'axios'
    import url from '@/service.config.js'

    export default {
        components:{
            Upload
        },
        data() {
            return {
                resgistering: false,
                ruleForm2: {
                    regUsername: '',
                    regPassword: '',
                    regCheckPassword:''
                },
                rules2: {
                    regUsername: [
                        {
                            required: true,
                            message: "please enter your account",
                            trigger: "blur"
                        }
                    ],
                    regPassword: [
                        { required: true, message: "enter your password", trigger: "blur" }
                    ],
                    regCheckPassword:[
                        {
                            required: true,
                            message: "enter your password",
                            trigger: "blur",
                        }

                        ]
                },
                checked: false
            };
        },
        methods: {
            //注册成功信息
            open2() {
                this.$message({
                    message: '注册成功！',
                    type: 'success'
                });
            },
            //注册失败信息
            open4() {
                this.$message.error('注册失败！');
            },
            handleSubmit(event) {
                console.log(11111);
                this.$refs.ruleForm2.validate(valid => {
                    if (valid) {
                        this.resgistering = true;
                        if (
                            this.ruleForm2.regPassword !==
                            this.ruleForm2.regCheckPassword
                        ) {
                            this.resgistering = false;
                            this.$alert("Password and Confirm Password inconsistent!", "info", {
                                confirmButtonText: "ok"
                            });
                        }
                    } else {
                        console.log("error submit!");
                        return false;
                    }
                });
                //待删
                this.ruleForm2.regUsername = this.ruleForm2.regPassword = this.ruleForm2.regCheckPassword = '';
            },
            //注册处理方法
            registerHandler(){
                axios({
                    url:url.registUser,        //url后端地址 service.config.js 中的后端接口
                    methods:'post',
                    data:{
                        userName:this.ruleForm2.regUsername,   //名称与模型名称对应
                        password:this.ruleForm2.regPassword
                    }
                }).then(res=>{
                    if(res.data.code === 200){
                        open2();
                        this.ruleForm2.regUsername = this.ruleForm2.regPassword = '';   //提交表单后清空表单信息
                    }else{
                        this.$message.error('注册失败！');
                    }
                    console.log(res);        //请求成功
                }).catch(err => {
                    this.$message.error('注册失败！');
                    console.log(err);        //请求失败
                })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .resgister-container {
        width: 100%;
        height: 100%;
        .head{
            display: flex;
            flex-wrap: nowrap;
            width:100%;
            padding-top: 2%;
            .headleftspace{
                width: 15%;
            }
            .headmiddle{
                width:75%;
            }
            .headleft{
                display: flex;
                width: 200px;
            }
            .headright{
                float:right;
                width:100px;
                color: #b6b6b6;
            }
        }
        .resgister-page {
            -webkit-border-radius: 5px;
            border-radius: 5px;
            margin: 50px auto;
            width: 400px;
            padding: 35px 35px 15px;
            background: #fff;
            border: 1px solid #eaeaea;
            // box-shadow: 0 0 15px #cac6c6;
            .title{
                margin-bottom: 30px;
            }
            .hr{
                width:100%;
                height:0.8px;
                background:#c0c4d6;
                margin-bottom:10px;
            }
        }
        label.el-checkbox.rememberme {
            margin: 0px 0px 15px;
            text-align: left;
        }
        .footer{
            margin: 20px auto;
            width: 33%;
            color:#b6b6b6;
            font-size:0.8em;
        }
    }
</style>
