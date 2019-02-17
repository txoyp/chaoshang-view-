const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    // 选项...
    productionSourceMap:false,
    lintOnSave:false,
    devServer:{
        open:true,
        port: 8081
    },
    configureWebpack:config => {
        if(process.env.NODE_ENV === '[production]'){
            return{
                plugins:[
                    new CompressionPlugin({
                    test:/\.js$|\.html$|\.css$/,
                        threshold:10240,
                        deleteOriginalAssets:true
                })
                ]
            }
        }
    }
};