<template>
    <div class="resgister-container">
        <div class="head">
            <div class="headleftspace">

            </div>
            <div class="headleft">
                <img src="" alt="">
                <p>LOGO</p>
                <p>短信登录</p>
            </div>
            <div class="headmiddle">

            </div>
            <div class="headright">
                <router-link to="/">返回</router-link>
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
            <h3 class="title">短信登录</h3>
            <el-form-item prop="username" label="手机号">
                <el-input type="text" auto-complete="off" placeholder="请输入您的手机号" v-model="ruleForm2.phoneNum"></el-input>
            </el-form-item>
            <el-form-item prop="username" label="验证码">
                <el-input type="text" auto-complete="off" placeholder="验证码" style="width:60%;" v-model="ruleForm2.code"></el-input>
                <el-button style="width:40%">验证码</el-button>
            </el-form-item>
            <br/>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="resgistering">登录</el-button>
            </el-form-item>
        </el-form>
        <div class="footer">
            Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                resgistering: false,
                ruleForm2: {
                    phoneNum: "",
                    code: ""
                },
                rules2: {
                    phoneNum: [
                        {
                            required: true,
                            message: "please enter your account",
                            trigger: "blur"
                        }
                    ],
                    code: [
                        { required: true, message: "enter your password", trigger: "blur" }
                    ]
                },
                checked: false
            };
        },
        methods: {
            handleSubmit(event) {
                this.$refs.ruleForm2.validate(valid => {
                    if (valid) {
                        this.resgistering = true;
                        if (
                            this.ruleForm2.phoneNum === "123456" &&
                            this.ruleForm2.code === "1234"
                        ) {
                            this.resgistering = false;
                            sessionStorage.setItem("user", this.ruleForm2.phoneNum);
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
                            this.ruleForm2.phoneNum === "" ||
                            this.ruleForm2.code === ""
                    ) {
                        this.resgistering = false;
                        this.$alert("phoneNum or code is Null!", "info", {
                            confirmButtonText: "ok"
                        });
                    }
                });
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    p{
        font-size: 1.3rem;
    }
    a{
        font-size: 1.3rem;
        color: #2c3e50;
    }
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
