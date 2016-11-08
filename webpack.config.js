var webpack = require('webpack');
module.exports = {
    entry: {
        index: ['./src/index.js','./src/style.css']
    },// 入口模块
    output: {
        path: './dist', // 输出路径
        filename: '[name].js' //输出名称
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // 通过扩展名和正则表达式来匹配资源文件
                exclude: /node_modules/,
                loader: 'babel',// 匹配到的资源会应用loader, loader可以为string 也可以为数组
                query: {
                    presets: ['es2015','stage-0','react']
                }
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};