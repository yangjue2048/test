module.exports = {
    //声明babel可用的插件
    //将来webpack 在调用babel-loader 的时候，会先加载 plugins插件来使用
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}