import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.weichuang.com/getList',{data:data.list}); //url地址 方法一

Mock.mock('http://www.weichuang.com/getUser',{
    'name|2':'zxy',  //重复两次
    'age|18-35':20   //生成18-35之间的随机数：20为数据的类型
});

Mock.mock('http://www.weichuang.com/regexp',{   //正则表达式
    'regexp1':/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/ //整数 重复5-10次
});

Mock.mock('http://www.weichuang.com/list',{   //随机生成列表
    'info|10-20':[
        {
            'index|+1':1, //索引
            'name':'@first @last', //英文名称 首字母大写
            'id':'@integer(10000,99999)', //整数 10000-99999
            'date':'@datetime',            //随机生成年月日，时分秒的时间
            'img':'@image("200*200")',    //图片地址
            'text':'@sentence(6,22)'      //英文文本 6-22个单词
        }
    ]
});

let Random = Mock.Random;
let productData = req => {
    let productList = [];  //存放信息的数组
    for(let i = 0;i < 28; i++){
        let product = {
            name:Random.ctitle(5,20),
            img:Random.dataImage('100x100','图片'+Random.integer(1,100)),
            price:Random.integer(1000,10000),
            owner:Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock('http://www.weichuang.com/getVarietyItem',productData());