<template>
    <div class="resgister-container">
        <div class="head">
            <div class="headleftspace">

            </div>
            <div class="headleft">
                <img src="" alt="">
                <p>LOGO</p>
                <p>密码找回</p>
            </div>
            <div class="headmiddle">

            </div>
            <div class="headright">
                <router-link to="/">去登录</router-link>
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
            <h3 class="title">找回密码</h3>
            <el-form-item prop="username" label="账号">
                <el-input type="text" auto-complete="off" placeholder="请输入您的手机号"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="新密码">
                <el-input type="password"  auto-complete="off" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="确认密码">
                <el-input type="password"  auto-complete="off" placeholder="再次输入新密码"></el-input>
            </el-form-item>
            <el-form-item prop="username" label="验证码">
                <el-input type="text" auto-complete="off" placeholder="验证码" style="width:60%;"></el-input>
                <el-button style="width:40%">验证码</el-button>
            </el-form-item>
            <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox> -->
            <br/>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="resgistering">确认更改</el-button>
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
                    username: "admin",
                    password: "123456"
                },
                rules2: {
                    username: [
                        {
                            required: true,
                            message: "please enter your account",
                            trigger: "blur"
                        }
                    ],
                    password: [
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
                            this.ruleForm2.username === "admin" &&
                            this.ruleForm2.password === "123456"
                        ) {
                            this.resgistering = false;
                            sessionStorage.setItem("user", this.ruleForm2.username);
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
