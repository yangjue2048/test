const path = require('path')   
//导入node.js中专门操作路径的模块
//__dirname 当前文件存放路径

//1. 导入html插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

//2. 创建html插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    //指定原文件的存放路径
    filename: 'index.html',
    //指定生成文件的存放路径
})

//左侧的{}是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //保证运行时报错的行数与源代码的行数一致
    //处于安全性考虑，发布时要关闭
    //devtool: 'eval-source-map',

    // 定位行号暴露源码，不推荐
    //devtool: 'source-map',

    //只定位行号不暴露源码
    devtool: 'nosources-source-map',
    
    mode: 'development'  ,   
            //mode用来指定构建模式，
            //可选值有 development（开发用，打包速度快） 和 
            //production（上线用，体积小）
    entry: path.join(__dirname, './src/index.js'),
                 //打包入口文件的路径
	output: {
        path: path.join(__dirname, './dist'),
	 			 //输出文件的存放路径
	 	filename: 'js/bundle.js'
                 //输出文件的名称
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin(),],
    //通过plugins节点，使htmlPlugin插件生效
    devServer: {
        open: true,   //首次打包成功后自动打开浏览器
        host: '127.0.0.1',  //指定运行的主机地址
        port: 80      //自己设置端口号
    },
    module: { 	//所有第三方文件模块的匹配规则
        rules: [	//文件后缀名的匹配规则
            //css
            {    test: /\.css$/,use: ['style-loader', 'css-loader'] },
            //less
            {    test: /\.less$/,use: ['style-loader', 'css-loader', 'less-loader']  },
            //imsges
            {    test: /\.jpg|png|gif$/,use: 'url-loader?limit=22229&outputPath=images' },

            //解决js高级语法的问题
            //注意：必须使用exclude 指定排除项，因为node_modules 目录下的第三方包不需要被打包
            { test: /\.js$/,use: 'babel-loader', exclude: /node_modules/ }
        ]
        //test表示匹配的文件类型，use表示对应要调用的loader
        //use 数组中指定的loader 顺序是固定的
        //多个loader的调用顺序是：从后往前调用

        //如果只调用一个loader，传递一个字符串就行，多个loader，必须指定数组
        //?之后是loader的参数项
		//limit用来指定图片的大小，单位是字节
		//只有<=limit大小的图片，才会被转为base64格式的图片
    },
    resolve: {
        alias: {
            //告诉webpack，程序员写的代码中， @ 符号表示src这一层目录
            '@':path.join(__dirname,'./src/')
        }
    }
       
}

