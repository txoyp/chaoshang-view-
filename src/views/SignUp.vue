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
            <el-form-item prop="username" label="国内:">
                <area-cascader
                        v-model="selected1"
                        :data="pca"
                        class="chinaarea"
                        @change="Disabled1(selected1)"
                        v-bind:disabled="disable1"
                ></area-cascader>
            </el-form-item>
            <el-form-item prop="username" label="国外:">
                <el-cascader
                        style="width: 100%"
                        placeholder="请选择地区..."
                        v-bind:disabled="disable2"
                        :options="options"
                        filterable
                        v-model="selected2"
                        change-on-select
                        @change="Disabled2(selected2)"
                ></el-cascader>
            </el-form-item>
            <el-form-item prop="username" label="职务:">
                <el-select style="width: 100%" v-model="duties" placeholder="请选择...">
                    <el-option
                            v-for="item in option"
                            :key="item.duties"
                            :label="item.label"
                            :value="item.duties"
                    ></el-option>
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
        <div class="footer">Copyright © 2019 chaoshang.com ,哈尔滨潮汕商会主办 xxICP备xxxxxxxx号</div>
    </div>
</template>

<script>
    import Upload from "../upload/Upload";
    import { pca, pcaa } from "area-data";
    export default {
        components: {
            Upload
        },
        data() {
            return {
                selected: [],
                selected1:'',
                selected2:'',
                pca: pca,
                pcaa: pcaa,
                resgistering: false,
                ruleForm2: {
                    username: "admin",
                    password: "123456"
                },
                disable1:false,
                disable2:false,
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
                checked: false,
                radio: "sex",
                options: [
                    { value: "阿尔巴尼亚", label: "阿尔巴尼亚" },
                    { value: "阿尔及利亚", label: "阿尔及利亚" },
                    { value: "阿富汗斯坦", label: "阿富汗斯坦" },
                    { value: "阿根廷", label: "阿根廷" },
                    { value: "阿拉伯联合酋长国", label: "阿拉伯联合酋长国" },
                    { value: "阿曼", label: "阿曼" },
                    { value: "阿塞拜疆", label: "阿塞拜疆" },
                    { value: "埃及", label: "埃及" },
                    { value: "埃塞俄比亚", label: "埃塞俄比亚" },
                    { value: "爱尔兰", label: "爱尔兰" },
                    { value: "爱沙尼亚", label: "爱沙尼亚" },
                    { value: "安道尔", label: "安道尔" },
                    { value: "安哥拉", label: "安哥拉" },
                    { value: "安提瓜和巴布达", label: "安提瓜和巴布达" },
                    { value: "奥地利", label: "奥地利" },
                    { value: "澳大利亚", label: "澳大利亚" },
                    { value: "巴巴多斯", label: "巴巴多斯" },
                    { value: "巴布亚新几内亚", label: "巴布亚新几内亚" },
                    { value: "巴哈马", label: "巴哈马" },
                    { value: "巴基斯坦", label: "巴基斯坦" },
                    { value: "巴拉圭", label: "巴拉圭" },
                    { value: "巴勒斯坦", label: "巴勒斯坦" },
                    { value: "巴林", label: "巴林" },
                    { value: "巴拿马", label: "巴拿马" },
                    { value: "巴西", label: "巴西" },
                    { value: "白俄罗斯", label: "白俄罗斯" },
                    { value: "保加利亚", label: "保加利亚" },
                    { value: "贝宁", label: "贝宁" },
                    { value: "比利时", label: "比利时" },
                    { value: "冰岛", label: "冰岛" },
                    { value: "波黑共和国", label: "波黑共和国" },
                    { value: "波兰", label: "波兰" },
                    { value: "玻利维亚", label: "玻利维亚" },
                    { value: "伯利兹", label: "伯利兹" },
                    { value: "博茨瓦纳", label: "博茨瓦纳" },
                    { value: "不丹", label: "不丹" },
                    { value: "布基纳法索", label: "布基纳法索" },
                    { value: "布隆迪", label: "布隆迪" },
                    { value: "朝鲜", label: "朝鲜" },
                    { value: "赤道几内亚", label: "赤道几内亚" },
                    { value: "丹麦", label: "丹麦" },
                    { value: "德国", label: "德国" },
                    { value: "东帝汶", label: "东帝汶" },
                    { value: "多哥", label: "多哥" },
                    { value: "多米尼加", label: "多米尼加" },
                    { value: "多米尼克", label: "多米尼克" },
                    { value: "俄罗斯", label: "俄罗斯" },
                    { value: "厄瓜多尔", label: "厄瓜多尔" },
                    { value: "厄立特里亚", label: "厄立特里亚" },
                    { value: "法国", label: "法国" },
                    { value: "梵蒂冈", label: "梵蒂冈" },
                    { value: "菲律宾", label: "菲律宾" },
                    { value: "斐济", label: "斐济" },
                    { value: "芬兰", label: "芬兰" },
                    { value: "佛得角", label: "佛得角" },
                    { value: "冈比亚", label: "冈比亚" },
                    { value: "刚果", label: "刚果" },
                    { value: "刚果民主共和国", label: "刚果民主共和国" },
                    { value: "哥伦比亚", label: "哥伦比亚" },
                    { value: "哥斯达黎加", label: "哥斯达黎加" },
                    { value: "格林纳达", label: "格林纳达" },
                    { value: "格鲁吉亚", label: "格鲁吉亚" },
                    { value: "古巴", label: "古巴" },
                    { value: "圭亚那", label: "圭亚那" },
                    { value: "哈萨克斯坦", label: "哈萨克斯坦" },
                    { value: "海地", label: "海地" },
                    { value: "韩国", label: "韩国" },
                    { value: "荷兰", label: "荷兰" },
                    { value: "黑山共和国", label: "黑山共和国" },
                    { value: "洪都拉斯", label: "洪都拉斯" },
                    { value: "基里巴斯", label: "基里巴斯" },
                    { value: "吉布提", label: "吉布提" },
                    { value: "吉尔吉斯斯坦", label: "吉尔吉斯斯坦" },
                    { value: "几内亚", label: "几内亚" },
                    { value: "几内亚比绍", label: "几内亚比绍" },
                    { value: "加拿大", label: "加拿大" },
                    { value: "加纳", label: "加纳" },
                    { value: "加蓬", label: "加蓬" },
                    { value: "柬埔寨", label: "柬埔寨" },
                    { value: "捷克", label: "捷克" },
                    { value: "津巴布韦", label: "津巴布韦" },
                    { value: "喀麦隆", label: "喀麦隆" },
                    { value: "卡塔尔", label: "卡塔尔" },
                    { value: "科摩罗", label: "科摩罗" },
                    { value: "科索沃", label: "科索沃" },
                    { value: "科特迪瓦", label: "科特迪瓦" },
                    { value: "科威特", label: "科威特" },
                    { value: "克罗地亚", label: "克罗地亚" },
                    { value: "肯尼亚", label: "肯尼亚" },
                    { value: "拉脱维亚", label: "拉脱维亚" },
                    { value: "莱索托", label: "莱索托" },
                    { value: "老挝", label: "老挝" },
                    { value: "黎巴嫩", label: "黎巴嫩" },
                    { value: "立陶宛", label: "立陶宛" },
                    { value: "利比里亚", label: "利比里亚" },
                    { value: "利比亚", label: "利比亚" },
                    { value: "列支敦士登", label: "列支敦士登" },
                    { value: "卢森堡", label: "卢森堡" },
                    { value: "卢旺达", label: "卢旺达" },
                    { value: "罗马尼亚", label: "罗马尼亚" },
                    { value: "马达加斯加", label: "马达加斯加" },
                    { value: "马尔代夫", label: "马尔代夫" },
                    { value: "马耳他", label: "马耳他" },
                    { value: "马拉维", label: "马拉维" },
                    { value: "马来西亚", label: "马来西亚" },
                    { value: "马里", label: "马里" },
                    { value: "马其顿", label: "马其顿" },
                    { value: "马绍尔群岛", label: "马绍尔群岛" },
                    { value: "毛里求斯", label: "毛里求斯" },
                    { value: "毛里塔尼亚", label: "毛里塔尼亚" },
                    { value: "美国", label: "美国" },
                    { value: "蒙古", label: "蒙古" },
                    { value: "孟加拉国", label: "孟加拉国" },
                    { value: "秘鲁", label: "秘鲁" },
                    { value: "密克罗尼西亚联邦", label: "密克罗尼西亚联邦" },
                    { value: "缅甸", label: "缅甸" },
                    { value: "摩尔多瓦", label: "摩尔多瓦" },
                    { value: "摩洛哥", label: "摩洛哥" },
                    { value: "摩纳哥", label: "摩纳哥" },
                    { value: "莫桑比克", label: "莫桑比克" },
                    { value: "墨西哥", label: "墨西哥" },
                    { value: "纳米比亚", label: "纳米比亚" },
                    { value: "南非", label: "南非" },
                    { value: "南苏丹", label: "南苏丹" },
                    { value: "瑙鲁", label: "瑙鲁" },
                    { value: "尼泊尔", label: "尼泊尔" },
                    { value: "尼加拉瓜", label: "尼加拉瓜" },
                    { value: "尼日尔", label: "尼日尔" },
                    { value: "尼日利亚", label: "尼日利亚" },
                    { value: "挪威", label: "挪威" },
                    { value: "帕劳", label: "帕劳" },
                    { value: "葡萄牙", label: "葡萄牙" },
                    { value: "日本", label: "日本" },
                    { value: "瑞典", label: "瑞典" },
                    { value: "瑞士", label: "瑞士" },
                    { value: "萨尔瓦多", label: "萨尔瓦多" },
                    { value: "萨摩亚", label: "萨摩亚" },
                    { value: "塞尔维亚", label: "塞尔维亚" },
                    { value: "塞拉利昂", label: "塞拉利昂" },
                    { value: "塞内加尔", label: "塞内加尔" },
                    { value: "塞浦路斯", label: "塞浦路斯" },
                    { value: "塞舌尔", label: "塞舌尔" },
                    { value: "沙特阿拉伯", label: "沙特阿拉伯" },
                    { value: "圣多美和普林西比", label: "圣多美和普林西比" },
                    { value: "圣基茨和尼维斯", label: "圣基茨和尼维斯" },
                    { value: "圣卢西亚", label: "圣卢西亚" },
                    { value: "圣马力诺", label: "圣马力诺" },
                    { value: "圣文森特和格林纳丁斯", label: "圣文森特和格林纳丁斯" },
                    { value: "斯里兰卡", label: "斯里兰卡" },
                    { value: "斯洛伐克", label: "斯洛伐克" },
                    { value: "斯洛文尼亚", label: "斯洛文尼亚" },
                    { value: "斯威士兰", label: "斯威士兰" },
                    { value: "苏丹", label: "苏丹" },
                    { value: "苏里南", label: "苏里南" },
                    { value: "所罗门群岛", label: "所罗门群岛" },
                    { value: "索马里", label: "索马里" },
                    { value: "塔吉克斯坦", label: "塔吉克斯坦" },
                    { value: "泰国", label: "泰国" },
                    { value: "坦桑尼亚", label: "坦桑尼亚" },
                    { value: "汤加", label: "汤加" },
                    { value: "特立尼达和多巴哥", label: "特立尼达和多巴哥" },
                    { value: "突尼斯", label: "突尼斯" },
                    { value: "图瓦卢", label: "图瓦卢" },
                    { value: "土耳其", label: "土耳其" },
                    { value: "土库曼斯坦", label: "土库曼斯坦" },
                    { value: "瓦努阿图", label: "瓦努阿图" },
                    { value: "危地马拉", label: "危地马拉" },
                    { value: "委内瑞拉", label: "委内瑞拉" },
                    { value: "文莱", label: "文莱" },
                    { value: "乌干达", label: "乌干达" },
                    { value: "乌克兰", label: "乌克兰" },
                    { value: "乌拉圭", label: "乌拉圭" },
                    { value: "乌兹别克斯坦", label: "乌兹别克斯坦" },
                    { value: "西班牙", label: "西班牙" },
                    { value: "希腊", label: "希腊" },
                    { value: "新加坡", label: "新加坡" },
                    { value: "新西兰", label: "新西兰" },
                    { value: "匈牙利", label: "匈牙利" },
                    { value: "叙利亚", label: "叙利亚" },
                    { value: "牙买加", label: "牙买加" },
                    { value: "亚美尼亚", label: "亚美尼亚" },
                    { value: "亚美尼亚", label: "亚美尼亚" },
                    { value: "也门", label: "也门" },
                    { value: "伊拉克", label: "伊拉克" },
                    { value: "伊朗", label: "伊朗" },
                    { value: "以色列", label: "以色列" },
                    { value: "意大利", label: "意大利" },
                    { value: "印度", label: "印度" },
                    { value: "印度尼西亚", label: "印度尼西亚" },
                    { value: "英国", label: "英国" },
                    { value: "约旦", label: "约旦" },
                    { value: "越南", label: "越南" },
                    { value: "赞比亚", label: "赞比亚" },
                    { value: "乍得", label: "乍得" },
                    { value: "智利", label: "智利" },
                    { value: "中非", label: "中非" }
                ],
                option: [
                    {
                        duties: "选项1",
                        label: "普通成员"
                    },
                    {
                        duties: "选项2",
                        label: "会长"
                    },
                    {
                        duties: "选项3",
                        label: "秘书"
                    },
                    {
                        duties: "选项4",
                        label: "办公室主任"
                    }
                ],
                duties: ""
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
            },
            Disabled1(region){
                console.log("region:"+region);
                if (region!==null){
                    this.disable2=true;
                }else {
                    this.disable2=false;
                }
            },
            Disabled2(region){
                console.log("region:"+region);
                if (region!==null){
                    this.disable1=true;
                }else {
                    this.disable1=false;
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
