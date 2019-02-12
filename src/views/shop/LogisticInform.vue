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
                <el-form-item label="管理员编号" prop="adminid">
                    <el-input placeholder="请输入管理员ID" v-model="ruleForm.adminid"></el-input>
                </el-form-item>
                <el-form-item label="订单编号" prop="name">
                    <el-input placeholder="请输入订单号" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="送货区域" prop="region">
                    <area-cascader
                            v-model="ruleForm.region"
                            :data="pca"
                            class="chinaarea"
                            @change="Disabled1(selected1)"
                            v-bind:disabled="disable1"
                    ></area-cascader>
                </el-form-item>
                <el-form-item label="发货时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item  label="商品重量" prop="weight">
                    <el-radio-group v-model="ruleForm.weight">
                        <el-radio-button label="1KG"></el-radio-button>
                        <el-radio-button label="1-3KG"></el-radio-button>
                        <el-radio-button label="3.5-5KG"></el-radio-button>
                    </el-radio-group>
                    <el-radio-group v-model="ruleForm.weight">
                        <el-radio-button style="margin-top: 1rem" label="5.5-10KG"></el-radio-button>
                        <el-radio-button label="10.5-30KG"></el-radio-button>
                        <el-radio-button label=">30KG"></el-radio-button>
                    </el-radio-group>
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
                <el-form-item label="订单说明">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="footer">Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号</div>
    </div>
</template>

<script>
    import { pca, pcaa } from "area-data";

    export default {
        data() {
            return {
                weight:'1KG',
                pca: pca,
                pcaa: pcaa,
                disable1:false,
                ruleForm: {
                    adminid:'',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    weight:'',
                    company:''
                },
                rules: {
                    adminid: [
                        { required: true, message: '请输入管理员编号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入订单编号', trigger: 'blur' },
                        { min: 5, max: 11, message: '长度在 5 到 11 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择送货区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择发货日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    weight:[{
                        required: true, message: '请选商品重量', trigger: 'change'
                    }],
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
        width: 36%;
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
    }
</style>