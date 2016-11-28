var webpack = require('webpack');
module.exports = {
    entry: {
        index: ['./src/index.js'],

        //第三方包
        vendor: [
            'react',
            'react-dom'
        ]
    },// 入口模块
    output: {
        path: './dist', // 输出路径
        filename: '[name].js', //输出名称
        publicPath: '/dist'
    },
    //webpack的核心功能包含loader,可以将任意资源转化为javascript模块
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
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};