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
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="会员编号" prop="memberid">
                    <el-input placeholder="请输入会员编号" v-model="ruleForm.memberid"></el-input>
                </el-form-item>
                <el-form-item label="订单编号" prop="name">
                    <el-input placeholder="请输入订单号" v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="物流公司" prop="company">
                    <el-select style="width: 100%" v-model="ruleForm.company" placeholder="请选择物流公司">
                        <el-option label="圆通" value="yuantong"></el-option>
                        <el-option label="韵达" value="yunda"></el-option>
                        <el-option label="中通" value="zhongtong"></el-option>
                        <el-option label="EMS" value="ems"></el-option>
                        <el-option label="天天" value="tiantian"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <span class="jump-page"><router-link to="/navList">返回商城</router-link></span>

                    <span class="jump-page"><router-link to="/">还没登录？去登陆</router-link></span>
                </el-form-item>
            </el-form>
        </div>
        <div class="footer">Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                disable1:false,
                ruleForm: {
                    memberid:'',
                    name: '',
                    delivery: false,
                    company:''
                },
                rules: {
                    memberid: [
                        { required: true, message: '请输入管理员编号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入订单编号', trigger: 'blur' },
                        { min: 5, max: 11, message: '长度在 5 到 11 个字符', trigger: 'blur' }
                    ],
                    company:[{
                        required: true, message: '请选择物流公司', trigger: 'change'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            Disabled1(region){
                console.log("region:"+region);
                if (region!==null){
                    this.disable2=true;
                }else {
                    this.disable2=false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 100px auto;
        width: 40%;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .float {
            display: flex;
            width: 100%;
            .find {
                display: flex;
                margin-left: 40%;
                color: #797979;
                font-size: 0.8em;
            }
            .find a {
                color: #797979;
                text-decoration: none;
            }
        }
        .register {
            color: #797979;
            font-size: 0.8em;
            text-align: left;
        }
        .register a {
            color: #797979;
            text-decoration: none;
        }
        .title {
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
            .title {
                margin-top: -10px;
            }
            .hr {
                width: 100%;
                height: 0.8px;
                background: #c0c4d6;
                margin-bottom: 10px;
            }
            .chinaarea {

            }
        }
        label.el-checkbox.rememberme {
            margin: 0px 0px 15px;
            text-align: left;
        }
        .attention {
            color: red;
            text-align: left;
            margin-left: 20%;
        }
        .footer {
            margin: 20px auto;
            width: 33%;
            color: #b6b6b6;
            font-size: 0.8em;
        }
        .jump-page{
            padding:0 2.2rem;
            a{
                color: #797979;
                text-decoration: none;
            }
        }
    }
</style>