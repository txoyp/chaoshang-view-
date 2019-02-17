const MOCKURL = 'http://www.weichuang.com/'; //mock模拟地址
const SERVERURL = 'http://localhost:3000';//真实地址

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct:MOCKURL + 'getHotProduct',
    // *******
    //注册控制器配置
    registUser:SERVERURL + 'user/registUser', //控制器名称/方法名称
    //登录控制器配置
    loinUser:SERVERURL + 'user/loinUser',
    //商品类型控制器配置
    getTypes:SERVERURL + 'type/getTypes',
    //获取商品控制器配置
    getProductsByType:SERVERURL + 'product/getProductsByType',
    //商品详情控制器配置
    getDetail:SERVERURL + 'product/getDetail',
    //购物车
    addCart:SERVERURL + 'cart/addCart',
    //获取购物车数据
    getCart:SERVERURL + 'cart/getCart'
};

export default URL;