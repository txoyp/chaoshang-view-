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
            <h3 class="title">报名信息</h3>
            <Upload></Upload>

            <el-form-item style=" margin-top:10px" prop="username" label="姓名:">
                <el-input type="text" auto-complete="off" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-form-item class="sex" prop="username" label="性别:">
                <el-radio style="margin-left: -200px" v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </el-form-item>
            <el-form-item prop="username" label="地区:">
                <el-cascader
                        style="width: 100%"
                        placeholder="请选择地区..."
                        :options="options"
                        filterable
                        change-on-select
                ></el-cascader>
            </el-form-item>
            <el-form-item prop="username" label="职务:">
                <el-select style="width: 100%" v-model="duties" placeholder="请选择...">
                    <el-option
                            v-for="item in option"
                            :key="item.duties"
                            :label="item.label"
                            :value="item.duties">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="username" label="证件号:">
                <el-input type="text" auto-complete="off" placeholder="请输入身份证号/护照编号"></el-input>
            </el-form-item>
            <div class="attention">注意:列表中带 ' * ' 号为必填选项</div>
            <el-form-item style="width:100%;margin-top: 20px;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">确认提交</el-button>
            </el-form-item>
        </el-form>
        <div class="footer">
            Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号
        </div>
    </div>
</template>

<script>

    import Upload from '../upload/Upload'

    export default {
        components: {
            Upload
        },
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
                        {required: true, message: "enter your password", trigger: "blur"}
                    ]
                },
                checked: false,
                radio: 'sex',
                options: [{
                    value: 'china',
                    label: '中国',
                    children: [{
                        value: 'anhui',
                        label: '安徽',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'other-Countries',
                    label: '其他国家',
                    children: [
                        {
                            value: 'albania',
                            label: '阿尔巴尼亚',
                        },
                        {
                            value: 'algeria',
                            label: '阿尔及利亚',
                        },
                        {
                            value: 'afghanistan',
                            label: '阿富汗斯坦',
                        },
                        {
                            value:'argentina',
                            label:'阿根廷'
                        },
                        {
                            value:'argentina',
                            label:'阿拉伯联合酋长国'
                        },
                        {
                            value:'6',
                            label:'阿曼'
                        },
                        {
                            value:'7',
                            label:''
                        },
                        {
                            value:'8',
                            label:''
                        },
                        {
                            value:'9',
                            label:''
                        },
                        {
                            value:'10',
                            label:''
                        },
                        {
                            value:'11',
                            label:''
                        },
                        {
                            value:'12',
                            label:''
                        },
                        {
                            value:'13',
                            label:''
                        },
                        {
                            value:'14',
                            label:''
                        },
                        {
                            value:'15',
                            label:''
                        },
                        {
                            value:'16',
                            label:''
                        },
                        {
                            value:'17',
                            label:''
                        },
                        {
                            value:'18',
                            label:''
                        },
                        {
                            value:'19',
                            label:''
                        },
                        {
                            value:'20',
                            label:''
                        },
                        {
                            value:'21',
                            label:''
                        },
                        {
                            value:'22',
                            label:''
                        },
                        {
                            value:'23',
                            label:''
                        },
                        {
                            value:'24',
                            label:''
                        },
                        {
                            value:'25',
                            label:''
                        },
                        {
                            value:'26',
                            label:''
                        },
                        {
                            value:'27',
                            label:''
                        },
                        {
                            value:'28',
                            label:''
                        },
                        {
                            value:'29',
                            label:''
                        },
                        {
                            value:'30',
                            label:''
                        },
                        {
                            value:'31',
                            label:''
                        },
                        {
                            value:'32',
                            label:''
                        },
                        {
                            value:'33',
                            label:''
                        },
                        {
                            value:'34',
                            label:''
                        },
                        {
                            value:'35',
                            label:''
                        },
                        {
                            value:'36',
                            label:''
                        },
                        {
                            value:'37',
                            label:''
                        },
                        {
                            value:'38',
                            label:''
                        },
                        {
                            value:'39',
                            label:''
                        },
                        {
                            value:'40',
                            label:''
                        },
                        {
                            value:'41',
                            label:''
                        },
                        {
                            value:'42',
                            label:''
                        },
                        {
                            value:'43',
                            label:''
                        },
                        {
                            value:'44',
                            label:''
                        },
                        {
                            value:'45',
                            label:''
                        },
                        {
                            value:'46',
                            label:''
                        },
                        {
                            value:'47',
                            label:''
                        },
                        {
                            value:'48',
                            label:''
                        },
                        {
                            value:'49',
                            label:''
                        },
                        {
                            value:'50',
                            label:''
                        },
                        {
                            value:'51',
                            label:''
                        },
                        {
                            value:'52',
                            label:''
                        },
                        {
                            value:'53',
                            label:''
                        },
                        {
                            value:'54',
                            label:''
                        },
                        {
                            value:'55',
                            label:''
                        },
                        {
                            value:'56',
                            label:''
                        },
                        {
                            value:'57',
                            label:''
                        },
                        {
                            value:'58',
                            label:''
                        },
                        {
                            value:'59',
                            label:''
                        },
                        {
                            value:'60',
                            label:''
                        },

                    ]
                }],
                option:[{
                    duties: '选项1',
                    label: '普通成员'
                }, {
                    duties: '选项2',
                    label: '会长'
                }, {
                    duties: '选项3',
                    label: '秘书'
                }, {
                    duties: '选项4',
                    label: '办公室主任'
                }],
                duties: '',
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
                margin-top: -10px;
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
        .attention{
            color:red;
            text-align: left;
            margin-left: 20%;
        }
        .footer{
            margin: 20px auto;
            width: 33%;
            color:#b6b6b6;
            font-size:0.8em;
        }
    }
</style>
